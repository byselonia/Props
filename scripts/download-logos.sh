#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download NFL logo
curl -o public/images/nfl-logo.png https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png

# Download NBA logo
curl -o public/images/nba-logo.png https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/1200px-National_Basketball_Association_logo.svg.png

# Download NHL logo
curl -o public/images/nhl-logo.png https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/05_NHL_Shield.svg/1200px-05_NHL_Shield.svg.png

# Download MLB logo
curl -o public/images/mlb-logo.png https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png 