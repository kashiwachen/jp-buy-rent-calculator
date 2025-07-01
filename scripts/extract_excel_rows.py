import openpyxl
import os

# Always load the Excel file from the same directory as this script
script_dir = os.path.dirname(os.path.abspath(__file__))
excel_path = os.path.join(script_dir, 'Rent vs Buy Calculator.xlsx')

wb = openpyxl.load_workbook(excel_path)
ws = wb.active

row_count = 0
for row in ws.iter_rows():
    values = [cell.value for cell in row]
    # Only print non-empty rows
    if any(values):
        print(values)
        row_count += 1
    if row_count >= 40:
        break 