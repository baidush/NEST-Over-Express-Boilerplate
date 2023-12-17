#!/bin/bash

# Set variables
REPO_URL=$1
CLONE_DIR="express"

# Clone the repository
git clone $REPO_URL $CLONE_DIR

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