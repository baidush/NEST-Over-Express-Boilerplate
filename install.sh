#!/bin/bash

# Set variables
REPO_URL=$1
CLONE_DIR="express"

rm -rf ./express
# Clone the repository
git clone $REPO_URL $CLONE_DIR

# Find and rename .env.sample to .env
find "$CLONE_DIR" -type f -name '.env*' -exec bash -c 'cp "$0" "${0%.env*}.env"' {} \;

# Print a message indicating successful renaming
echo "Successfully renamed .env.sample files to .env in $FOLDER_PATH"

# Navigate to the cloned directory
cd $CLONE_DIR

# Install dependencies
npm install

cd ../

# Build the Nest.js application
npm run build
rsync -r "$CLONE_DIR"/ "dist/$CLONE_DIR"

# Print a message indicating successful completion
echo "Nest.js application cloned, dependencies installed, and built successfully!"