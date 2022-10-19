import requests
# Warning: Replace example.com at line 5 with your URL
link = input("Link to your video from Youtube: ")

url = 'https://example.com/mp3?URL=' + link
r = requests.get(url, allow_redirects=True)
open('song.mp3', 'wb').write(r.content)
