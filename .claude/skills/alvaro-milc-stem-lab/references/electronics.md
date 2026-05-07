# Referencia Doctoral: Electrónica e IoT

## Microcontroladores

### Arduino (ATmega328P / ESP-based)
- **IDE**: Arduino IDE 2.x, PlatformIO
- **Lenguaje**: C/C++ (Arduino framework)
- **Pines**: Digital (INPUT, OUTPUT, INPUT_PULLUP), Analógicos (ADC 10-bit), PWM
- **Comunicación**: Serial (UART), I2C (Wire.h), SPI, Software Serial
- **Funciones core**: `digitalRead()`, `digitalWrite()`, `analogRead()`, `analogWrite()`, `millis()`, `delay()`, `attachInterrupt()`
- **Librerías esenciales**: Servo.h, LiquidCrystal_I2C.h, DHT.h, Adafruit_Sensor.h, WiFi.h

### ESP32
- **Procesador**: Dual-core Xtensa LX6, 240 MHz
- **Memoria**: 520 KB SRAM, 4 MB Flash
- **Conectividad**: WiFi 802.11 b/g/n, Bluetooth 4.2 + BLE
- **ADC**: 12-bit (2 módulos, 18 canales)
- **DAC**: 8-bit (2 canales)
- **PWM**: LEDC (16 canales independientes)
- **Touch capacitivo**: 10 pines touch
- **Funciones especiales**: Deep sleep (µA), RTC, Hall sensor
- **Framework**: Arduino, ESP-IDF, MicroPython
- **Librerías WiFi**: WiFi.h, HTTPClient.h, AsyncWebServer, ESPAsyncWebServer
- **Librerías BLE**: BLEDevice.h, BLEUtils.h

### Raspberry Pi (3B+/4/5/Pico)
- **Raspberry Pi OS**: Linux basado en Debian
- **GPIO**: 40 pines, Python (RPi.GPIO, gpiozero), I2C, SPI, UART
- **Pico (RP2040)**: Dual-core ARM Cortex-M0+, 264KB SRAM, MicroPython/C
- **Aplicaciones**: Servidor web, procesamiento de imágenes (OpenCV), base de datos, dashboard

### MicroPython
- **Intérprete**: Python 3.x para microcontroladores
- **Plataformas**: ESP32, ESP8266, Raspberry Pi Pico, STM32
- **Módulos**: `machine` (Pin, ADC, PWM, I2C, SPI, Timer), `network`, `uos`, `ujson`, `urequests`
- **IDE**: Thonny, µPyCraft, VS Code + Pymakr
- **WebREPL**: Acceso inalámbrico al REPL

## Sensores Comunes

| Sensor | Tipo | Protocolo | Librería |
|---|---|---|---|
| DHT11/DHT22 | Temperatura + Humedad | Digital (1-wire) | DHT.h |
| BMP280/BME280 | Presión + Temp (+ Hum) | I2C/SPI | Adafruit_BMP280.h |
| HC-SR04 | Ultrasonido (distancia) | Digital (Trigger/Echo) | NewPing.h |
| MPU6050 | Acelerómetro + Giroscopio | I2C | MPU6050.h |
| LDR | Luz (fotoresistencia) | Analógico | — |
| DS18B20 | Temperatura (preciso) | 1-Wire | OneWire.h + DallasTemperature.h |
| MQ-2/MQ-135 | Gas (humo/CO₂) | Analógico | MQUnifiedsensor.h |
| HC-05/HC-06 | Bluetooth clásico | UART | SoftwareSerial.h |
| OLED SSD1306 | Display 128×64 | I2C | Adafruit_SSD1306.h |
| Servo SG90 | Motor servo 180° | PWM | Servo.h |
| Motor paso a paso | Stepper motor | Digital (4 pines) | Stepper.h / AccelStepper.h |
| Potenciómetro | Resistencia variable | Analógico | — |
| Pulsador | Switch digital | Digital (con pull-up/down) | — |
| Buzzer | Sonido | PWM/Digital | tone() |
| Relay | Interruptor electromecánico | Digital | — |
| LCD 16×2 | Display caracteres | I2C (PCF8574) | LiquidCrystal_I2C.h |
| Neopixel WS2812B | LED RGB direccionable | Digital (1-wire) | Adafruit_NeoPixel.h |

## Teoría de Circuitos (para enseñanza)

### Componentes pasivos
- **Resistencia**: V = IR, asociaciones serie/paralelo, código de colores, potencia P = I²R
- **Capacitor**: Q = CV, i = C(dV/dt), energía E = ½CV², asociaciones, carga/descarga RC
- **Inductor**: V = L(di/dt), energía E = ½LI², asociaciones, circuitos RL

### Componentes activos
- **Diodo**: Curva I-V, diodo ideal, LED, Zener, rectificadores (media onda, onda completa, puente)
- **Transistor BJT**: NPN/PNP, regiones (corte, activa, saturación), polarización, amplificador emisor común
- **MOSFET**: Canal N/P, regiones, como interruptor digital
- **Amplificador operacional**: Inversor, no inversor, sumador, restador, integrador, diferenciador, comparador, seguidor de voltaje

### Análisis de circuitos
- **Leyes de Kirchhoff**: KVL (mallas), KCL (nodos)
- **Teoremas**: Superposición, Thévenin, Norton, máxima transferencia de potencia
- **Circuitos AC**: Fasores, impedancia Z = R + jX, admitancia, potencia compleja S = P + jQ
- **Filtros**: Paso bajo, paso alto, paso banda, rechazo de banda (RC, RL, RLC)
- **Respuesta en frecuencia**: Diagramas de Bode, frecuencia de corte, factor de calidad Q

## Protocolos de Comunicación

| Protocolo | Hilos | Velocidad | Distancia | Uso típico |
|---|---|---|---|---|
| UART | 2 (TX/RX) | 9600-115200 bps | Corta | Debug, Bluetooth |
| I2C | 2 (SDA/SCL) | 100-400 kHz | < 1 m | Sensores, displays |
| SPI | 4 (MOSI/MISO/SCK/CS) | MHz | < 1 m | SD cards, displays TFT |
| 1-Wire | 1 (data) | 16 kbps | < 100 m | DS18B20 |
| WiFi | — | Mbps | ~30 m | IoT, web server |
| BLE | — | 1 Mbps | ~10 m | Wearables, beacons |
| MQTT | TCP/IP | Variable | Internet | IoT cloud |
| HTTP/REST | TCP/IP | Variable | Internet | APIs, dashboards |

## Patrones de Proyecto IoT

### ESP32 + Firebase (tiempo real)
```
1. ESP32 lee sensores → JSON
2. WiFi.begin(ssid, password)
3. HTTPClient → POST a Firebase Realtime DB
4. Dashboard web lee Firebase con onValue()
5. Gráfica en tiempo real con Chart.js/Plotly
```

### Arduino + Display + Sensores (standalone)
```
1. setup(): Inicializar I2C, sensores, display
2. loop(): Leer sensor → Procesar → Mostrar en OLED/LCD
3. Botones para cambiar modo/unidades
4. Alarmas con buzzer
```

### Raspberry Pi como servidor de laboratorio
```
1. Python Flask/FastAPI como servidor
2. GPIO para leer sensores
3. SQLite/MySQL para almacenar datos
4. Dashboard web con Plotly/Bokeh
5. Acceso desde red local
```

## Esquemáticos en LaTeX (Circuitikz)

```latex
\usepackage[american]{circuitikz}
% Componentes: R (resistencia), C (capacitor), L (inductor)
% cute inductors, american voltages
\begin{circuitikz}[american]
  \draw (0,0) to[V=$V_s$] (0,3)
              to[R=$R_1$] (3,3)
              to[C=$C_1$] (3,0)
              -- (0,0);
\end{circuitikz}
```
