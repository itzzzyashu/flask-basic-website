from flask import Flask, render_template
app = Flask(__name__)

@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/blog/')
def blog():
    return render_template('blog.html')

if __name__=="__main__":
    print("http://127.0.0.1:9050/home")
    app.run(debug=True, port=9050)