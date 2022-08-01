from flask import Flask, redirect, render_template, request

# Configurations

app = Flask(__name__)
PORT=6995
URL=f"http://127:0.0.1:{PORT}"



@app.route('/')
def home():
    return render_template('index.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.errorhandler(404)
def internet_error(e):
  return render_template("internet-error.html")

if __name__=="__main__":
    app.run(debug=True, port=PORT)