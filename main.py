
"""
    get_random.py

    MediaWiki API Demos
    Demo of `Random` module: Get request to list 5 random pages.

    MIT License
"""

import requests

S = requests.Session()

URL = "https://en.wikipedia.org/w/api.php"

PARAMS = {
    "rnnamespace": 0,
    "action": "query",
    "format": "json",
    "list": "random",
    "rnlimit": "3",
    "rnconentmodel" : "wikitext"
}

r = input().capitalize()

R = S.get(url=URL, params=PARAMS)
DATA = R.json()

RANDOMS = DATA["query"]["random"]

for r in RANDOMS:
    print(r["title"])
