import speech_recognition as sr
import pyaudio


# def run():  
#     r = sr.Recognizer()

#     print(sr.Microphone.list_microphone_names())

#     mic = sr.Microphone()

#     with mic as source:
#         r.adjust_for_ambient_noise(source, duration=1)
#         audio = r.listen(source)


#     response = {
#         "success": True,
#         "error": None,
#         "transcription": None
#     }
#     try:
#         response["transcription"] = r.recognize_google(audio)
#     except sr.RequestError:
#         response["success"] = False
#         response["error"] = "API unavailable"
#     except sr.UnknownValueError:
#         # speech was unintelligible
#         response["error"] = "Unable to recognize speech"

#     print(response["transcription"])

# if __name__ == '__main__':
#     run()