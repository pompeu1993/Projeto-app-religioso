#!/bin/sh
set -e

# Set default port if not provided
PORT=${PORT:-3000}

echo "Starting serve on port $PORT"
echo "Serving files from /app/dist"

# Start the server
exec serve -s dist -l tcp://0.0.0.0:$PORT 