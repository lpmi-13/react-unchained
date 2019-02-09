def is_input_valid(text):
    return ((text is not None) and
            (text != '') and
            (len(text) <= 100))
