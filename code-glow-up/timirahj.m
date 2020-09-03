NSString *json = @"[{\"artist\": \"Beyonce\",\"song\":\"Crazy In Love\"},{\"artist\": \"Chris Brown\",\"song\":\"Poppin'\"}]";
  NSData *jsonData = [json dataUsingEncoding:NSUTF8StringEncoding];
  NSError *error;
  id jsonObject = [NSJSONSerialization JSONObjectWithData:jsonData options:0 error:&error];
  if (error) {
    NSLog(@"Error: %@", error);
  } else {
    NSDictionary *jsonDictionary = (NSDictionary *)jsonObject;
    NSLog(@"%@",jsonDictionary);
  }