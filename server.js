const express = require('express');
const path = require('path');
const { serveHTTP, getRouter } = require('stremio-addon-sdk');
const addonInterface = require('./addon/addon');

const app = express();
const PORT = process.env.PORT || 7000;

// Serve the landing page (static React files)
app.use(express.static(path.join(__dirname, 'public')));

// Serve addon API at /addon routes
const addonRouter = getRouter(addonInterface);
app.use('/addon', addonRouter);

// Backward compatibility - serve manifest at root too
app.get('/manifest.json', (req, res) => {
    res.redirect('/addon/manifest.json');
});

// Catch all - serve React app for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log('═'.repeat(60));
    console.log('✅ إضافة Stremio العربية - الخادم الموحد');
    console.log('═'.repeat(60));
    console.log(`🌐 المنفذ (Port): ${PORT}`);
    console.log(`📱 الصفحة الرئيسية: http://localhost:${PORT}`);
    console.log(`📝 Manifest URL: http://localhost:${PORT}/addon/manifest.json`);
    console.log('═'.repeat(60));
});
