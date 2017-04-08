#include <OneWire.h>
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS D4


const char* host = "52.231.39.26"; // Your domain
const char* think = "api.thingspeak.com";  
String ApiKey = "98H37F1M5FULMB8Z";
String think_path = "/update?key=" + ApiKey + "&field1=";  
String path="/temp_data?temp=";

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature DS18B20(&oneWire);

const char* ssid = "U+Net073B";
const char* pass = "6163180356";


char temperatureString[6];

void setup(void){
  Serial.begin(115200);
  Serial.println("");
  
  WiFi.begin(ssid, pass);
  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  DS18B20.begin();
   

}

float getTemperature() {
  float temp;
 
    DS18B20.requestTemperatures(); 
    temp = DS18B20.getTempCByIndex(0);
    delay(100);
  
  return temp;
}


void loop() {

  float temperature = getTemperature();
  dtostrf(temperature, 2, 2, temperatureString);
  // send temperature to the serial console
  Serial.println(temperatureString);
  WiFiClient client;
  int httpPort;
  httpPort = 3000;
  if (!client.connect(host, httpPort)) {
    Serial.println("connection failed");
  }
  else{
    client.print(String("GET ") + path + temperatureString + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
               "Connection: keep-alive\r\n\r\n");
  }
  Serial.print("send data to ");
  Serial.println(host);
  
  httpPort = 80;
  if (!client.connect(think, httpPort)) {
    Serial.println("connection failed");
    return;
  }
  client.print(String("GET ") + think_path + temperatureString + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
               "Connection: keep-alive\r\n\r\n");
  Serial.print("send data to ");
  Serial.println(think);
  delay(60000);
  //delay(10000);
}
