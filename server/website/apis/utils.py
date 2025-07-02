import hashlib

from urllib.parse import urlencode

def gravatar_url(email="growiq@gmail.com", size=40, default="identicon", rating='g'):
    email_encoded = email.lower().encode('utf-8')
    email_hash = hashlib.sha256(email_encoded).hexdigest()
    params = urlencode({'d': default, 's': str(size), 'r': rating})
    return f"https://www.gravatar.com/avatar/{email_hash}?{params}"