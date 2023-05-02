import chess
from flask import Flask, jsonify, request
from flask_cors import CORS


board = chess.Board()

def populateData(b):
    data = {}
    fenData = b.split(' ')
    data["board"] = fenData[0]
    data["turn"] = fenData[1]
    data["castleAvailable"] = fenData[2]
    data["enPassantAvailable"] = fenData[3]
    data["totalTurns"] = fenData[4]
    return data

# creating a Flask app
app = Flask(__name__)
CORS(app)

@app.route('/game', methods = ['GET', 'POST'])
def home():
    if request.method == "GET":
        data = populateData(board.fen())
        return jsonify(data)
     

@app.route('/home/<int:num>', methods = ['GET'])
def disp(num):

	return jsonify({'data': num**2})


# driver function
if __name__ == '__main__':
	app.run(debug = True)
