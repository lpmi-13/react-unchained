def is_input_valid(text):
    return ((text is not None) and 
        (text is not '') and
        (len(text) <= 100))  