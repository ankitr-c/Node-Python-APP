from pymongo import MongoClient
import datetime
from bson import ObjectId
from flask import Flask, jsonify, request, redirect, render_template

app = Flask(__name__,template_folder='C:\\Users\\Coditas\\Desktop\\Node Python APP\\Frontend')
from flask_cors import CORS
CORS(app)

uri = 'mongodb+srv://bbt0987:BBT0987@cluster0.jcazi2w.mongodb.net/?retryWrites=true&w=majority'
client = MongoClient(uri)

db = client.get_database('NodeApp')

table = db.get_collection('user')

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        mail=request.form['mail']
        passwd=request.form['passwd']
        # Check if the username exists
        user = table.find_one({"mail": mail})
        if not user:   
            return render_template('login.html',msg="User Name Does Not Exists")
        # Check if the password matches
        if user["pass"] == passwd:
            # return redirect('/dashboard',username=user["username"])  
            return render_template('dashboard.html',username=user["username"],data=dashboard())
        else:
            return render_template('login.html',msg="Wrong Password")

            
def dashboard():
    cursor = table.find().sort("score", -1)
    data={}
    # Print the data
    for document in cursor:
        username = document.get("username", "N/A")
        score = document.get("score", "N/A")
        data[username]=score
    return data


@app.route('/dashboard', methods=['POST', 'GET'])
def dashboard():
    cursor = table.find().sort("score", -1)
    data={}
    # Print the data
    for document in cursor:
        username = document.get("username", "N/A")
        score = document.get("score", "N/A")
        data[username]=score
    return data

# @app.route('/register', methods=['POST', 'GET'])
# def register():
#     if request.method == 'POST':
#         mail=request.form['mail']
#         username=request.form['username']
#         passwd=request.form['passwd']
#         score=0
#         data = {
#                 "mail":mail,
#                 "username":username,
#                 "pass":passwd,
#                 "score":score,
#             }
#         existing_email = table.find_one({"mail": mail})
#         if existing_email:
#             return render_template('register.html',msg="Mail ID Exists")

#         existing_username = table.find_one({"username": username})
#         if existing_username:
#             return render_template('register.html',msg="User Name Exists")

#         table.insert_one(data)
#         return render_template('login.html')


@app.route('/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        data = request.get_json()  # Get JSON data from the request

        mail = data.get('mail', '')
        username = data.get('username', '')
        passwd = data.get('passwd', '')
        score = 0
        print(mail)
        existing_email = table.find_one({"mail": mail})
        if existing_email:
            return jsonify({"error": "Mail ID Exists"})

        existing_username = table.find_one({"username": username})
        if existing_username:
            return jsonify({"error": "User Name Exists"})

        table.insert_one({
            "mail": mail,
            "username": username,
            "pass": passwd,
            "score": score,
        })

        return jsonify({"success": True})

    return render_template('login.html.html')

# close the client connection
# client.close()

if __name__ == "__main__":
    app.run(debug=True, port=8000)
