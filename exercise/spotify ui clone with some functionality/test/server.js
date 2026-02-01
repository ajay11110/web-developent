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

// Manual ultra-minimal directory listing at ROOT (NO CSS, NO HTML boilerplate)
app.get("*", (req, res) => {
    const decodedPath = decodeURIComponent(req.path);
    const subPath = decodedPath === "/" ? "" : decodedPath;
    const targetPath = path.join(__dirname, "../spotify clone/data", subPath);

    fs.stat(targetPath, (err, stats) => {
        if (err) return res.status(404).send("Not Found");

        if (stats.isFile()) {
            return res.sendFile(targetPath);
        }

        fs.readdir(targetPath, { withFileTypes: true }, (err, entries) => {
            if (err) return res.status(500).send("Error reading directory");

            res.set("Content-Type", "text/html");
            let html = `<b>Index of ${req.path}</b><br><br>\n`;

            if (req.path !== "/") {
                const parentPath = path.dirname(req.path);
                const parentLink = parentPath === "\\" || parentPath === "." ? "/" : parentPath;
                html += `<a href="${parentLink}">.. (Up one level)</a><br>\n`;
            }

            entries.forEach(entry => {
                const name = entry.name;
                const link = path.join(req.path, name).replace(/\\/g, "/");
                html += `<a href="${link}">${name}${entry.isDirectory() ? "/" : ""}</a><br>\n`;
            });

            res.send(html);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
