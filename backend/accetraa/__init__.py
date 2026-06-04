import os

if os.getenv("DJANGO_SETTINGS_MODULE") != "accetraa.settings.staging":
    import pymysql
    pymysql.install_as_MySQLdb()