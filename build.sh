build_folder="./dist"

# Re-Build the project
./node_modules/.bin/cross-env NODE_ENV=production npm run pugjs
./node_modules/.bin/cross-env NODE_ENV=production npm run postcss

mkdir "$build_folder"
cd "$build_folder"

mkdir Content

cd ../


cp -rf ./build/* "$build_folder"
cp -rf ./public/* "$build_folder"/Content

# Delete useless dev files
rm "$build_folder"/*.map

# Make a zip file recursively and delete the source files
rar a -r -dr "$build_folder".zip "$build_folder"