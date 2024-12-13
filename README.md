# TO DO

# breakpoint mobile 640px

# kolory

#f16232 - pomarańcz

# shared hosting

.htaccess

Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
