import React from 'react';
import { jsPDF } from 'jspdf';
import { FileDown } from 'lucide-react';
import { RenovationCategory } from '../types/Calculator';

interface PDFExportProps {
  categories: RenovationCategory[];
}

const PDFExport: React.FC<PDFExportProps> = ({ categories }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.setTextColor(50, 50, 50);
    doc.text('Home Renovation Cost Estimate', 20, 20);
    
    doc.setDrawColor(100, 100, 100);
    doc.line(20, 25, 190, 25);
    
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 35);
    
    const totalCost = categories.reduce((sum, category) => 
      sum + category.items.reduce((itemSum, item) => itemSum + item.cost, 0), 0
    );
    
    doc.setFontSize(16);
    doc.setTextColor(50, 50, 50);
    doc.text(`Total Estimated Cost: ₹${totalCost.toLocaleString('en-IN')}`, 20, 45);
    
    let yPosition = 60;
    
    categories.forEach(category => {
      const categoryTotal = category.items.reduce((sum, item) => sum + item.cost, 0);
      
      if (categoryTotal === 0) return;
      
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(14);
      doc.setTextColor(40, 40, 150);
      doc.text(category.name, 20, yPosition);
      doc.setTextColor(50, 50, 50);
      doc.text(`₹${categoryTotal.toLocaleString('en-IN')}`, 160, yPosition, { align: 'right' });
      
      yPosition += 7;
      
      category.items.forEach(item => {
        if (item.cost === 0) return;
        
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
        
        doc.setFontSize(12);
        doc.setTextColor(80, 80, 80);
        doc.text(`   • ${item.name}`, 25, yPosition);
        doc.text(`₹${item.cost.toLocaleString('en-IN')}`, 160, yPosition, { align: 'right' });
        
        yPosition += 7;
      });
      
      yPosition += 5;
    });
    
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.setTextColor(150, 150, 150);
      doc.text('Home Renovation Cost Calculator | Page ' + i + ' of ' + pageCount, 20, 287);
    }
    
    doc.save('home-renovation-estimate.pdf');
  };

  return (
    <button
      onClick={generatePDF}
      className="flex items-center justify-center py-3 px-4 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition duration-200 shadow-md"
    >
      <FileDown size={16} className="mr-2" />
      Download PDF Estimate
    </button>
  );
};

export default PDFExport;