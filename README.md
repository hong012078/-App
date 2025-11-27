# 🇻🇳 Da Nang & Hoi An Trip Planner (PWA)

這是一個專為峴港與會安 6 日遊設計的互動式旅遊 Web App。結合了詳細的行程時間軸與 Google Gemini AI 旅遊助理，並支援 PWA 技術，可直接安裝於手機主畫面，提供如同原生 App 的體驗。

![Tech Stack](https://img.shields.io/badge/Tech-React_18-blue)
![Tech Stack](https://img.shields.io/badge/Build-Vite-646cff)
![Tech Stack](https://img.shields.io/badge/Style-Tailwind_CSS-38bdf8)
![Tech Stack](https://img.shields.io/badge/AI-Google_Gemini-8e75b2)

## ✨ 特色功能

*   **📱 行動優先設計 (Mobile-First)**：專為手機瀏覽優化，支援 PWA 安裝。
*   **🤖 AI 旅遊助理**：內建 Google Gemini 對話視窗，可隨時詢問行程細節、當地天氣或旅遊建議。
*   **📅 互動式時間軸**：清晰的每日行程卡片，包含景點、餐飲與住宿資訊。
*   **🎫 票券與詳情**：點擊行程可查看詳細資訊（如航班號、飯店訂房代碼、門票 QR Code 模擬）。
*   **🗺️ 地圖導航**：整合 Google Maps 連結，一鍵導航至景點或推薦餐廳。

## 🚀 如何部署 (Netlify)

由於此專案已配置為 Vite 應用程式，在 Netlify 部署時請注意環境變數的設定。

### 步驟

1.  登入 [Netlify](https://www.netlify.com/)。
2.  點擊 **"Add new site"** -> **"Import an existing project"** -> 選擇 **GitHub**。
3.  選擇你的 Repository。
4.  **Build Settings (Netlify 會自動偵測，若無請手動設定)**:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
5.  **環境變數設定 (Environment variables)**:
    *   點擊 "Add a variable"。
    *   **Key**: `VITE_API_KEY` (注意：必須加 `VITE_` 前綴，前端才能讀取)
    *   **Value**: 你的 Google Gemini API Key。
6.  點擊 **"Deploy"**。

## 📲 如何在手機上安裝

取得網址後（例如 `https://your-site.netlify.app`），在手機瀏覽器開啟：

*   **iOS (Safari)**: 點擊底部「分享」按鈕 (Share) -> 選擇「加入主畫面」(Add to Home Screen)。
*   **Android (Chrome)**: 點擊右上角選單 -> 選擇「安裝應用程式」或「加到主畫面」。

## 🛠️ 本地開發

1.  Clone 專案：
    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```
2.  安裝依賴：
    ```bash
    npm install
    ```
3.  建立 `.env` 檔案並填入 API Key：
    ```
    VITE_API_KEY=你的_GEMINI_API_KEY
    ```
4.  啟動開發伺服器：
    ```bash
    npm run dev
    ```

## 📄 License

MIT