# Ejecutar desde PowerShell, parado en la carpeta "capsule"
# cd "C:\Users\Diego V\Desktop\Library Full-Stack\PorfolioDivFlow\capsule"

# --- A. Componentes/archivos completos ya desconectados del código ---
Remove-Item "frontend\src\components\Feedback" -Recurse -Force
Remove-Item "frontend\src\constants\feedback.js" -Force
Remove-Item "frontend\src\components\Preloader\Preloader.jsx" -Force
Remove-Item "frontend\src\lib\lenis.js" -Force

# --- C. Assets sin ninguna referencia en el código ---
Remove-Item "frontend\src\assets\hero-mobile.png" -Force
Remove-Item "frontend\src\assets\logo-black.png" -Force
Remove-Item "frontend\src\assets\logo-white.png" -Force
Remove-Item "frontend\src\assets\react.svg" -Force
Remove-Item "frontend\src\assets\s.png" -Force
Remove-Item "frontend\src\assets\sdf.png" -Force
Remove-Item "frontend\src\assets\showcase-img.png" -Force
Remove-Item "frontend\src\assets\welcome-1.png" -Force
Remove-Item "frontend\src\assets\welcome-2.png" -Force
Remove-Item "frontend\src\assets\high-level-description-a-photorealistic-_CVjitmvKXMeeo4G1gEx6Xg_WB03KDWZRwu2rM5HOhcw-Q.jpg" -Force
Remove-Item "frontend\src\assets\high-level-description-a-photorealistic-_Yb9XECzXU5SfYhczzjryuw_WB03KDWZRwu2rM5HOhcw-Q_cover.jpg" -Force
Remove-Item "frontend\src\assets\review1.png" -Force
Remove-Item "frontend\src\assets\review2.png" -Force
Remove-Item "frontend\src\assets\review3.png" -Force
Remove-Item "frontend\src\assets\background4.png" -Force

# --- D. Resto de @studio-freight/lenis en node_modules (ya sacado de package.json, esto es solo basura de instalacion) ---
Remove-Item "frontend\node_modules\@studio-freight" -Recurse -Force -ErrorAction SilentlyContinue

# --- F. Huerfanos de la raiz del repo (ya sacados de git, solo queda borrar del disco) ---
Remove-Item "package.json" -Force
Remove-Item "package-lock.json" -Force
Remove-Item "node_modules" -Recurse -Force

# --- Carpetas temporales de verificacion de build que quedaron colgadas durante esta sesion ---
Remove-Item "frontend\dist_verify","frontend\dist_verify2","frontend\dist_check","frontend\dist_check2","frontend\dist_check3","frontend\dist_check4","frontend\dist_seo_check","frontend\dist_focus_check","frontend\dist_final_check","frontend\dist_final_check2" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Listo. Corre 'git status' para confirmar que no quedo nada raro." -ForegroundColor Green
