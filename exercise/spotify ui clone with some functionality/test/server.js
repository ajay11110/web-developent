const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// CORS Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    // Handle preflight
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    console.log(`${req.method} ${req.url} - CORS headers applied`);
    next();
});

// API to get libraries (subfolders in data)
app.get("/api/libraries", (req, res) => {
    const dataDir = path.join(__dirname, "../spotify clone/data");

    fs.readdir(dataDir, { withFileTypes: true }, (err, entries) => {
        if (err) {
            console.error(err);
            return res.status(500).json([]);
        }

        const libraries = entries
            .filter(entry => entry.isDirectory())
            .map(entry => entry.name);
        res.json(libraries);
    });
});

// API to get songs for a specific library
app.get("/api/songs/:library", (req, res) => {
    const library = req.params.library;
    const libraryDir = path.join(__dirname, "../spotify clone/data", library);

    fs.readdir(libraryDir, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).json([]);
        }

        const songs = files.filter(file => file.endsWith(".mp3"));
        res.json(songs);
    });
});

// Manual directory listing / file server at ROOT
app.get("*", (req, res) => {
    const decodedPath = decodeURIComponent(req.path);
    
    // Normalize path and join with data directory
    // We want to serve files from "../spotify clone/data"
    const baseDataDir = path.resolve(__dirname, "../spotify clone/data");
    const targetPath = path.join(baseDataDir, decodedPath);

    console.log(`[REQUEST] Path: ${req.path} | Decoded: ${decodedPath}`);
    console.log(`[RESOLVE] Target: ${targetPath}`);

    // Basic security: Ensure the resolved path is within the data directory
    if (!targetPath.startsWith(baseDataDir)) {
        console.warn(`[SECURITY] Attempted access outside data dir: ${targetPath}`);
        return res.status(403).send("Forbidden");
    }

    fs.stat(targetPath, (err, stats) => {
        if (err) {
            console.error(`[ERROR] fs.stat failed for ${targetPath}:`, err.message);
            return res.status(404).send("Not Found");
        }

        if (stats.isFile()) {
            console.log(`[SERVE] File: ${targetPath}`);
            return res.sendFile(targetPath);
        }

        if (stats.isDirectory()) {
            fs.readdir(targetPath, { withFileTypes: true }, (err, entries) => {
                if (err) {
                    console.error(`[ERROR] fs.readdir failed for ${targetPath}:`, err.message);
                    return res.status(500).send("Error reading directory");
                }

                console.log(`[LIST] Directory: ${targetPath} (${entries.length} items)`);

                res.set("Content-Type", "text/html");
                let html = `<b>Index of ${decodedPath}</b><br><br>\n`;

                if (decodedPath !== "/" && decodedPath !== "") {
                    const parentPath = path.dirname(decodedPath).replace(/\\/g, "/");
                    const parentLink = parentPath === "." ? "/" : parentPath;
                    html += `<a href="${parentLink}">.. (Up one level)</a><br>\n`;
                }

                entries.forEach(entry => {
                    const name = entry.name;
                    // Ensure the link is properly formatted for the browser
                    const linkPrefix = decodedPath.endsWith("/") ? decodedPath : decodedPath + "/";
                    const link = (linkPrefix + name).replace(/\/+/g, "/"); 
                    html += `<a href="${link}">${name}${entry.isDirectory() ? "/" : ""}</a><br>\n`;
                });

                res.send(html);
            });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
