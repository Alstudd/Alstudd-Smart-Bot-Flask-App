from flask import Flask, render_template, request, flash
import wikipedia
import datetime
import pywhatkit
import pyjokes

app = Flask(__name__)
app.secret_key = "super_secret"


def run_func(user_input):
    my_dict = {
    "hi" : "Hey",
    "what is your name": "My name is Travis",
    "how are you" : "I am fine"
    }
    # Removing special symbols from user_input
    sample_list = []
    for i in user_input:
        if i.isalnum() or i == " ":
            sample_list.append(i)
    isalnum_input = "".join(sample_list)
    # turning all characters to lowercase
    inp = isalnum_input.lower()
    # Remove the extra spaces if any, from user_input
    final_inp = " ".join(inp.split())
    # Main code
    if (final_inp in my_dict.keys()):
        return my_dict[final_inp]

    elif 'time' in user_input:
        time = datetime.datetime.now().strftime('%I:%M %p')
        return time
    
    elif 'play' in user_input:
        song = user_input.replace('play', '')
        return pywhatkit.playonyt(song)
    
    elif ('who is' in user_input) or ('what is' in user_input) or ('where' in user_input):
        person = user_input.replace('who is', '')
        info = wikipedia.summary(person, 2)
        return info

    elif 'are you single' in user_input:
        print('I am in a relationship with wifi')

    elif 'joke' in user_input:
        funny = pyjokes.get_joke()
        return funny
    
    else:
        return "I didn't understand that!"

@app.route("/")
def index():
    # flash("Ask something...")
    return render_template('bot.html')

@app.route("/submit", methods=['POST', 'GET'])
def submit():
    user_input = str(request.form['chatbot-input'])
    user_input = user_input.lower()
    final_answer = run_func(user_input)
    flash(user_input)
    return render_template('bot.html', answer=final_answer, user_input=user_input)

if __name__ == '__main__':
    app.run(debug=True)