INSERT INTO lesson_content(sound, intro_text, illustration, example_audio_male, example_audio_female) 
VALUES ("ɹ", "test", "images/r_illustration.jpg", "audio/r/male.mp3", "audio/r/female.mp3");
select * from lesson_content where sound="ɹ";