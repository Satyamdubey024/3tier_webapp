print("🚀 Connecting to database...")

import psycopg2

try:
    conn = psycopg2.connect(
        host='localhost',
        database='mydb',
        user='myuser',
        password='mypassword'
    )
    print("✅ Connected successfully!")

    cur = conn.cursor()
    cur.execute('SELECT * FROM items;')
    rows = cur.fetchall()
    print("📦 Data from DB:")
    for row in rows:
        print(row)
    cur.close()
    conn.close()

except Exception as e:
    print("❌ Error:", e)
