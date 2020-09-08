// NSString *json = @"[{\"artist\": \"Beyonce\",\"song\":\"Crazy In Love\"},{\"artist\": \"Chris Brown\",\"song\":\"Poppin'\"}]";
//   NSData *jsonData = [json dataUsingEncoding:NSUTF8StringEncoding];
//   NSError *error;
//   id jsonObject = [NSJSONSerialization JSONObjectWithData:jsonData options:0 error:&error];
//   if (error) {
//     NSLog(@"Error: %@", error);
//   } else {
//     NSDictionary *jsonDictionary = (NSDictionary *)jsonObject;
//     NSLog(@"%@",jsonDictionary);
//   }


// I created my json, without you it don't mean a thing
// in vscode that I play on, dictionaries composed of strings
let json = """
[
    {
        "name": "Beyonce",
        "song": "Crazy In Love"
    },

    {
        "name": "Chris Brown",
        "song": "Poppin"
    }
]
"""

// and now I've got my Codable struct
struct Artist: Codable {
    var name: String?
    var song: String?
}

// Got my decoder so you can decode my love
let decoder = JSONDecoder()
let jsonData = Data(json.utf8)

// Here you decode it and break it down
do {
    let artists = try decoder([Artist].self), from: jsonData)
    print (artists)
}
// if there's an error, I'll show you how!
catch {
    print("error:", error.localizedDescription)
}
