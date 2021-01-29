INSERT INTO lesson_content(sound, intro_text, illustration, example_audio_male, example_audio_female, quiz_words) 
VALUES ("ɹ", 
        "The English \“r\” sound, [ɹ] is made by curling your tongue towards the top of your mouth. You can create the curl with the tip or back of your tongue. The illustration below shows both ways to create the sound.
        In American English, the \“r\” sound can be expected most times that you see \“r\” in spelling.", 
        "images/r_illustration.jpg", 
        "audio/r/male.mp3", 
        "audio/r/female.mp3",
        "read,right,role,mirror,firing,sores,veer,tire,roar");

INSERT INTO min_pair(audio, same, lesson_id) 
VALUES ("audio/r/r_mp1.mp3", 0, 1), 
    ("audio/r/r_mp2.mp3", 1, 1), 
    ("audio/r/r_mp3.mp3", 0, 1), 
    ("audio/r/r_mp4.mp3", 0, 1), 
    ("audio/r/r_mp5.mp3", 1, 1),
    ("audio/r/r_mp6.mp3", 0, 1), 
    ("audio/r/r_mp7.mp3", 1, 1), 
    ("audio/r/r_mp8.mp3", 1, 1), 
    ("audio/r/r_mp9.mp3", 0, 1), 
    ("audio/r/r_mp10.mp3", 1, 1);

INSERT INTO role("name") 
VALUES ("student"), 
        ("teacher"), 
        ("researcher"), 
        ("admin");