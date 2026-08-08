# Aplana capsule/frontend/* -> PorfolioDivFlow/*, conservando el historial de git.
# Correr desde PowerShell, con VS Code y "npm run dev" cerrados.

cd "C:\Users\Diego V\Desktop\Library Full-Stack\PorfolioDivFlow"

# 1. node_modules no se mueve: se borra y se reinstala ya en el lugar nuevo
Remove-Item "capsule\frontend\node_modules" -Recurse -Force -ErrorAction SilentlyContinue

# 2. Nos quedamos con el .gitignore de frontend (el que de verdad aplica al proyecto)
#    y descartamos el de la raíz vieja de capsule.
Remove-Item "capsule\.gitignore" -Force -ErrorAction SilentlyContinue

# 3. Movemos .git, .github y README.md -- esto es lo que hace que la raíz
#    del repositorio "se mude" a PorfolioDivFlow.
Move-Item "capsule\.git" ".git"
Move-Item "capsule\.github" ".github"
Move-Item "capsule\README.md" "README.md"

# 4. Movemos todo el contenido real del proyecto (incluye archivos ocultos
#    como .gitignore y eslint.config.js) un nivel arriba.
Get-ChildItem -Path "capsule\frontend" -Force | Move-Item -Destination "."

# 5. Borramos "capsule", que ya quedó vacía.
Remove-Item "capsule" -Recurse -Force

# 6. Verificamos que git sigue reconociendo el repo desde la nueva ubicación.
git status

# 7. Reinstalamos dependencias en el lugar nuevo.
npm install

# 8. Registramos el movimiento como un commit. Git va a detectar la mayoría
#    de los archivos como "renombrados" (mismo contenido, ruta nueva), así
#    que el historial de cada archivo se conserva.
git add -A
git commit -m "chore: aplanar estructura del repo, eliminar wrapper capsule/frontend"
git push origin develop
