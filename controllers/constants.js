// Constants
const VERSION_SERVER = '1.0 30/03/2022 Beta';
const DEFAULT_PORT = 35907; 
const DB_PATH = './db/';

// Languages
const LANGUAGES = ['it','es','en'];

// Bible Loaded
const BIBLES_VERSIONS = [
 			       {'language' : 'it',
				'name' : 'NR94',
				'default' : 'Y',
				'description' : 'Nuova Riveduta 1994',
				'detailed_info' : 'Copyright © 1994 by Geneva Bible Society',
				'file' : 'NR94.SQLite3'},
				{'language' : 'en',
				'name' : 'ESV',
				'default' : 'Y',
				'description' : 'English Standard Version 2001, 2016',
				'detailed_info' : 'The Holy Bible, English Standard Version. Copyright © 2001 by Crossway Bibles, a publishing ministry of Good News Publishers.',
				'file' : 'ESV.SQLite3'},
				{'language' : 'es',
				'name' : 'RVA15',
				'default' : 'Y',
				'description' : 'Reina Valera Actualizada, 2015',
				'detailed_info' : 'Version Reina Valera Actualizada, Copyright © 2015 by Editorial Mundo Hispano',
				'file' : 'RVA15.SQLite3'},
			       ];


module.exports = {
    VERSION_SERVER: VERSION_SERVER,
    DEFAULT_PORT: DEFAULT_PORT,
    LANGUAGES: LANGUAGES,
    DB_PATH: DB_PATH,
    BIBLES_VERSIONS: BIBLES_VERSIONS
};