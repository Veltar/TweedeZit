/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"nt181lP0XNlKNZftPKdypAPljP5SEmfk"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"cbZObNwx0EVq4X2RKleFkNSGKlB7xWSX"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"myDhnvEIsTFYR7Qp54hNLLZ5bRhXBqOL"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"aZFDRHpBFBHrxYwMyXffjgyxp34IKmVL"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"BDkHlLyG1LShhR05Ap9FChhBHG7gxaoz"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"ifIsHq6MfyVc0dqL34ke54U2yP0DwVXz"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
