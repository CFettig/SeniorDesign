import os
import pysle.isletool as ist
import pysle.pronunciationtools as prt

#load dictionary other way?
isleDict = ist.LexicalTool()

#returns a list of all pronunciations for given word
def get_phonemes(word):
    try: 
        return list(ist.transcribe(isleDict, word, preference='longest').replace(' ', ''))
    except:
        return None
 
def compare_words(actual, intended):
    # list_actual = list(ist.transcribe(isleDict, actual, preference='longest').replace(' ', ''))
    # list_intended = list(ist.transcribe(isleDict, intended, preference='longest').replace(' ', ''))

    list_actual = get_phonemes(actual.strip())
    list_intended = get_phonemes(intended.strip())

    if list_actual and list_intended:
        list_actual, list_intended = prt.alignPronunciations(list_actual, list_intended)

        res = []
        for i in range(len(list_actual)):
            if (list_intended[i] != '\'\'') and (list_actual[i] != list_intended[i]):
                    # print(list_intended[i])
                    # print(list_actual[i])
                    res.append(list_intended[i])

        return res

    elif list_actual and not list_intended:
        raise Exception("The word '{}' was not found in the dictionary".format(intended))
    elif list_intended and not list_actual:
        raise Exception("The word '{}' was not found in the dictionary".format(actual))
    else: 
        raise Exception("Neither word was found in the dicitonary")

if __name__ == '__main__':
    # compare_words("cleopatra", "snack")
    pass