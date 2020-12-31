import os
import pysle.isletool as ist
import pysle.pronunciationtools as prt

#load dictionary other way?
isleDict = ist.LexicalTool()

#returns a list of all pronunciations for given word
def get_phonemes(word):
    return list(ist.transcribe(isleDict, word, preference='longest'))
 
def compare_words(actual, intended):
    list_actual = list(ist.transcribe(isleDict, actual, preference='longest'))
    list_intended = list(ist.transcribe(isleDict, intended, preference='longest'))

    list_actual, list_intended = prt.alignPronunciations(list_actual, list_intended)

    res = []
    for i in range(len(list_actual)):
        if list_actual[i] != list_intended[i]:
            res.append(list_intended[i])
    
    return res

if __name__ == '__main__':
    print(compare_words("bested", "rested"))