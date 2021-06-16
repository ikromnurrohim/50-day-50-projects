import time
import winsound
from win10toast import ToastNotifier
# hhelo
def timer(message, minute):
    notificator = ToastNotifier()
    notificator.show_toast("Alarm", f"Alarm will go off in {minute} minutes...")
    time.sleep(minute * 60)
    winsound.Beep(frequency=2500, duration=10000000)
    notificator.show_toast(f"Alarm", message, duration=5000)

if __name__ =="__main__":
    message = "Post on github!"
    minute = 0.11
    timer(message, minute)
