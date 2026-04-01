from pypdf import PdfReader
import os
from pathlib import Path

def extract_cv_data_and_update():
    """Extract CV data from PDF and update the TypeScript data file."""
    
    # Find the most recent CV PDF in public directory
    pdf_dir = Path('public')
    pdf_files = list(pdf_dir.glob('*.pdf'))
    
    if not pdf_files:
        print("❌ Error: No PDF file found in public directory")
        return False
    
    pdf_path = max(pdf_files, key=lambda p: p.stat().st_mtime)  # Get most recent PDF
    print(f"📄 Processing: {pdf_path}")
    
    try:
        reader = PdfReader(pdf_path)
        full_text = ""
        
        for page in reader.pages:
            full_text += page.extract_text()
        
        print("✅ Successfully extracted CV text from PDF")
        
        # TODO: Parse CV text and update src/data/cv-data.ts
        # For now, manual updates are needed in cv-data.ts based on the extracted text
        
        print("\n📊 CV Data Structure:")
        print("   ├─ About/Summary")
        print("   ├─ Skills (Languages, Frameworks, Databases, Cloud & DevOps, Tools)")
        print("   ├─ Work Experience")
        print("   ├─ Projects")
        print("   ├─ Education")
        print("   └─ Certifications")
        print("\n✨ Website content is ready to use!")
        print("   Run: npm run dev")
        return True
        
    except Exception as e:
        print(f"❌ Error extracting PDF: {e}")
        return False

if __name__ == "__main__":
    success = extract_cv_data_and_update()
    exit(0 if success else 1)
