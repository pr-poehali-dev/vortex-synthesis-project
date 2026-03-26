import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку на покупку игрового аккаунта на почту владельца магазина."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    contact = body.get('contact', '').strip()
    game = body.get('game', '')
    rank = body.get('rank', '')
    price = body.get('price', '')

    if not name or not contact:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и контакт обязательны'}, ensure_ascii=False)
        }

    smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_pass = os.environ.get('SMTP_PASS', '')
    to_email = 'mtdejbu@aliban.org'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка на покупку: {game} — {rank}'
    msg['From'] = smtp_user
    msg['To'] = to_email

    html = f"""
    <html><body style="font-family:sans-serif;background:#0a0a0a;color:#fff;padding:24px;">
      <h2 style="color:#8B5CF6;">Новая заявка на покупку аккаунта</h2>
      <table style="border-collapse:collapse;width:100%;max-width:480px;">
        <tr><td style="padding:8px 0;color:#aaa;">Игра</td><td style="padding:8px 0;font-weight:bold;">{game}</td></tr>
        <tr><td style="padding:8px 0;color:#aaa;">Ранг</td><td style="padding:8px 0;">{rank}</td></tr>
        <tr><td style="padding:8px 0;color:#aaa;">Цена</td><td style="padding:8px 0;color:#8B5CF6;font-weight:bold;">{price} ₽</td></tr>
        <tr><td style="padding:8px 0;color:#aaa;">Имя покупателя</td><td style="padding:8px 0;">{name}</td></tr>
        <tr><td style="padding:8px 0;color:#aaa;">Контакт</td><td style="padding:8px 0;">{contact}</td></tr>
      </table>
      <p style="color:#666;margin-top:24px;font-size:13px;">GameVault™ — заявка получена автоматически</p>
    </body></html>
    """

    msg.attach(MIMEText(html, 'html'))

    server = smtplib.SMTP(smtp_host, smtp_port)
    server.starttls()
    server.login(smtp_user, smtp_pass)
    server.sendmail(smtp_user, to_email, msg.as_string())
    server.quit()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }