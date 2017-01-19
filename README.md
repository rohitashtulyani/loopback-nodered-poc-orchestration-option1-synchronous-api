#loopback-nodered-poc-orchestration-option1-synchronous-api

This POC demonstrate synchronus api orchestration using loopback and node-red

loopback API's : Customer, Account and Iam


1.  Input Payload at starting
2.  Create Customer payload using Cutomer Outgoing Template.
3.  Parse template using Json translator.
4.  Call Customer Api.
5.  Handle Customer Api's response via Handler 
    5.1  If api is returning business error, it will be handled in error debug block.
    5.2  Otherwise it will pass response to join.  
6.  Join both input payload and customer api response using Join function. And create a single merged paylaod.
7.  Create Account payload from join paylod using Cutomer Outgoing Template.
8.  Call Account Api.
9.  Handle Account Api's response via Handler 
    9.1  If api is returning business error, it will be handled in error debug block.
    9.2  Otherwise it will pass response to second join.
10. Create Iam payload from join paylod using Iam Outgoing Template.
11. Call Iam Api.
12. Handle Iam Api's response via Handler 
    12.1 If api is returning business error, it will be handled in error debug block.
    12.2 Otherwise it will pass response to second join.
13. Join Account and Iam api's result and pass to Response.

14. catch all will handle all api connection issue like - socket hangup etc.
