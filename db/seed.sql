USE outbreakStatus_db;

INSERT INTO USERS (userid,  wholename,  gender,  age_range,  email,  country)
  VALUES
	(null, 'Harry Sally', 'male', 50, 'Harry@Seattle.com','us'),
	(null, 'Yoggie Bear', 'male', 60, 'Yoggie@Jellystone.com','us'),
	(null, 'Speed Racer', 'male', 50, 'Speed@Mach4.com','us'),
	(null, 'Elon Musk',   'male', 50, 'Elon@Tesla.com', 'au'),
	(null, 'Thomas Crown','male', 50, 'Thomas@Affair.com', 'wal'),
	(null, 'James Wink',   'male', 50, 'JW@aol.com', 'us'),
	(null, 'Madame Curie','female', 153, 'Curie@science.com', 'us'),
	(null, 'The Queen',   'female', 93, 'Liz@HerMajestyService.com','uk'),
	(null, 'Amelia Mary Earhart',   'female', 123, 'Hart@Fly.com', 'us');

INSERT INTO events ( email, eventname, eventlocation, datecreated )
VALUES ('Harry@Seattle.com', 'Vaccine Expo', 'Wuhan, China', '1579687147000'),
('Yoggie@Jellystone.com','Free Screening', 'Daegu, South Korea', '1582365547000'),
('Speed@Mach4.com','Family Pasta Night', 'Milan, Italy', '1582711147000'),
( 'Elon@Tesla.com','Cherry Blossom Viewing', 'Hokkaido, Japan', '1583273572000'),
( 'Thomas@Affair.com','Nuclear Debriefing', 'Tehran, Iran', '1582970347000'),
( 'JW@aol.com', 'Chernobyl Site Tour', 'Pripyat, Ukraine', '514893547000'),
( 'Curie@science.com','Free Screening', 'Daegu, South Korea', '1582365547000'),
( 'Liz@HerMajestyService.com','Family Pasta Night', 'Milan, Italy', '1582711147000'),
( 'Hart@Fly.com','Cherry Blossom Viewing', 'Hokkaido, Japan', '1583273572000'),
( 'Hart@Fly.com','Nuclear Debriefing', 'Tehran, Iran', '1582970347000'),
( 'Hart@Fly.com','Chernobyl Site Tour', 'Pripyat, Ukraine', '514893547000'),
( 'Liz@HerMajestyService.com','Free Screening', 'Daegu, South Korea', '1582365547000'),
( 'Yoggie@Jellystone.com''Family Pasta Night', 'Milan, Italy', '1582711147000'),
( 'Yoggie@Jellystone.com''Cherry Blossom Viewing', 'Hokkaido, Japan', '1583273572000'),
( 'Yoggie@Jellystone.com''Nuclear Debriefing', 'Tehran, Iran', '1582970347000'),
( 'Yoggie@Jellystone.com''Chernobyl Site Tour', 'Pripyat, Ukraine', '514893547000');

