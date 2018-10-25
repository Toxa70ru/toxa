from flask import Flask, url_for, render_template
app = Flask(__name__)   #__main__

def generate_links():
    with app.test_request_context():
        Toxa_the_great_link = url_for('hello_user',username = 'Toxa')
        index_link = url_for('index',
                             param1 = 'param1',
                             param2 = 'param2'
                             )
        links = {"Toxa`s page": Toxa_the_great_link,
                 'Index': index_link
                 }
    return  links
@app.route('/')
def index():
    links = generate_links()
    return render_template('index.html',links=links)

@app.route('/user/')
@app.route('/user/<path:username>')
def hello_user(username= None):
    links = generate_links()
    return render_template('user.html', username=username, links=links)


with app.test_request_context():
    print("http://localhost" + url_for('hello_user', username='Toxa the God of PUBG'))
if __name__ == '__main__':
    app.run('0.0.0.0',debug=True)


