const uart = require('../peripheral/uart');

var FT232 = new uart(2, 115200, {split: '\n'});
FT232.send([0x61, 0x62, 0x63, 0x64, 0x65, 0x31]);
FT232.send(['a', 'b', 'c', 'd', 'e', '2']);
FT232.send('abcde3');

FT232.on('data', function(data) {
	print(data);
	FT232.send(432);
});