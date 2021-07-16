#!/usr/bin/env bash

composer install --optimize-autoloader --prefer-dist --no-dev
echo 'Generate readme.'
curl -L https://raw.githubusercontent.com/fumikito/wp-readme/master/wp-readme.php | php
