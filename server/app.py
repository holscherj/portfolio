from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/index")
def index():
  return {"test": ["Test1", "Test2", "Test3"]}

if __name__ == '__main__':
  app.run(debug=True)