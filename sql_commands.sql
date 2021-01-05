INSERT INTO lesson_content(sound, intro_text, illustration, example_audio_male, example_audio_female) 
VALUES ("ɹ", "test", "images/r_illustration.jpg", "audio/r/male.mp3", "audio/r/female.mp3");

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