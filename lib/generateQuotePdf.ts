// import PDFDocument from 'pdfkit'
// interface QuotePdfData {
//     quoteId: string
//     issueDate: string        // e.g. '2025-11-22'
//     validUntil: string       // e.g. '2025-12-22'
//     schoolName: string
//     contactName: string
//     contactEmail: string
//     country: string
//     semesterPrice: number
//     monthPrice: number
//     yearPrice: number
//     currency?: string        // default: 'USD'
//   }

// export async function generateQuotePdf(data: QuotePdfData): Promise<Buffer> {
//   return new Promise((resolve, reject) => {
//     try {
//       const doc = new PDFDocument({
//         size: 'LETTER', // US Letter
//         margin: 50,
//       })

//       const chunks: Buffer[] = []
//       doc.on('data', (chunk) => chunks.push(chunk))
//       doc.on('end', () => resolve(Buffer.concat(chunks)))
//       doc.on('error', (err) => reject(err))

//       const currency = data.currency || 'USD'
//       const formatMoney = (n: number) =>
//         new Intl.NumberFormat('en-US', {
//           style: 'currency',
//           currency,
//           maximumFractionDigits: 0,
//         }).format(n)

//       // ---------- HEADER ----------
//       // Optional: if you have a logo file path, you can draw it here:
//        doc.image('../../public/images/logo.jpg', 50, 40, { width: 120 })

//       doc
//         .fontSize(20)
//         .font('Helvetica-Bold')
//         .text('Classify AI – Pricing Quote', 50, 40)

//       doc
//         .fontSize(10)
//         .font('Helvetica')
//         .fillColor('#555555')
//         .text('Classify Solutions', 50, 70)
//         .text('AI-powered exam scheduling', 50, 84)
//         .text('Email: sales@classify.com', 50, 98)
//         // .text('Phone: +1 (000) 000-0000', 50, 112) // if you want

//       doc
//         .fontSize(10)
//         .fillColor('#555555')
//         .text(`Quote ID: ${data.quoteId}`, 350, 70, { align: 'right' })
//         .text(`Issue date: ${data.issueDate}`, { align: 'right' })
//         .text(`Valid until: ${data.validUntil}`, { align: 'right' })

//       doc.moveDown(2)

//       // ---------- CLIENT BLOCK ----------
//       doc
//         .fontSize(12)
//         .fillColor('#111111')
//         .font('Helvetica-Bold')
//         .text('Quote for:', 50)

//       doc
//         .font('Helvetica')
//         .fontSize(11)
//         .moveDown(0.5)
//         .text(data.schoolName)
//         .text(data.contactName || '')
//         .text(data.contactEmail || '')
//         .text(data.country || '')

//       doc.moveDown(2)

//       // ---------- SUMMARY TITLE ----------
//       doc
//         .font('Helvetica-Bold')
//         .fontSize(14)
//         .fillColor('#111111')
//         .text('Subscription Summary', 50)

//       doc.moveDown(0.5)

//       doc
//         .fontSize(10)
//         .font('Helvetica')
//         .fillColor('#444444')
//         .text(
//           'This quote covers the Classify AI exam scheduling platform, including timetable generation, Google Workspace integration, and exam operations tooling.',
//           {
//             width: 500,
//           }
//         )

//       doc.moveDown(1.5)

//       // ---------- PRICING BOX ----------
//       const boxTop = doc.y
//       const boxLeft = 50
//       const boxWidth = 500
//       const boxHeight = 120

//       // Draw box
//       doc
//         .roundedRect(boxLeft, boxTop, boxWidth, boxHeight, 8)
//         .strokeColor('#CCCCCC')
//         .lineWidth(0.8)
//         .stroke()

//       const innerLeft = boxLeft + 16
//       const innerTop = boxTop + 12

//       doc
//         .font('Helvetica-Bold')
//         .fontSize(12)
//         .fillColor('#111111')
//         .text('Pricing (in ' + currency + ')', innerLeft, innerTop)

//       doc.moveDown(0.5)

//       const rowTop = innerTop + 18

//       // Per semester
//       doc
//         .fontSize(11)
//         .font('Helvetica')
//         .fillColor('#333333')
//         .text('Per semester', innerLeft, rowTop)

//       doc
//         .font('Helvetica-Bold')
//         .fillColor('#111111')
//         .text(formatMoney(data.semesterPrice), innerLeft + 200, rowTop)

//       // Per month (approx)
//       const row2Top = rowTop + 18
//       doc
//         .font('Helvetica')
//         .fillColor('#333333')
//         .text('Per month (approx.)', innerLeft, row2Top)

//       doc
//         .font('Helvetica-Bold')
//         .fillColor('#111111')
//         .text(formatMoney(data.monthPrice), innerLeft + 200, row2Top)

//       // Per year
//       const row3Top = row2Top + 18
//       doc
//         .font('Helvetica')
//         .fillColor('#333333')
//         .text('Full year', innerLeft, row3Top)

//       doc
//         .font('Helvetica-Bold')
//         .fillColor('#111111')
//         .text(formatMoney(data.yearPrice), innerLeft + 200, row3Top)

//       // Discount line
//       const row4Top = row3Top + 20
//       doc
//         .font('Helvetica')
//         .fontSize(9)
//         .fillColor('#555555')
//         .text(
//           'Yearly pricing includes approximately a 30% discount compared to paying per semester.',
//           innerLeft,
//           row4Top,
//           { width: boxWidth - 32 }
//         )

//       doc.moveDown(4)

//       // ---------- NOTES / CONDITIONS ----------
//       doc
//         .font('Helvetica-Bold')
//         .fontSize(12)
//         .fillColor('#111111')
//         .text('Notes and conditions', 50)

//       doc
//         .moveDown(0.5)
//         .font('Helvetica')
//         .fontSize(10)
//         .fillColor('#444444')
//         .text(`• Currency: ${currency}.`, { width: 500 })
//         .moveDown(0.2)
//         .text('• Pricing assumes use by a single institution (campus or school entity).', {
//           width: 500,
//         })
//         .moveDown(0.2)
//         .text('• Local taxes, VAT or other duties may apply depending on your jurisdiction.', {
//           width: 500,
//         })
//         .moveDown(0.2)
//         .text(
//           `• This quote is valid until ${data.validUntil}. After this date, pricing may be reviewed based on context and exchange rates.`,
//           { width: 500 }
//         )

//       doc.moveDown(3)

//       // ---------- SIGNATURE BLOCK ----------
//       const sigTop = doc.y
//       const sigColumnWidth = 250

//       // Left: Classify
//       doc
//         .font('Helvetica-Bold')
//         .fontSize(11)
//         .fillColor('#111111')
//         .text('For Classify Solutions', 50, sigTop)

//       doc
//         .moveDown(1)
//         .font('Helvetica')
//         .fontSize(10)
//         .fillColor('#444444')
//         .text('Name: ______________________________', 50)
//         .text('Title: ______________________________', 50)
//         .text('Date:  ______________________________', 50)

//       // Signature line
//       doc.moveDown(1)
//       doc
//         .moveTo(50, doc.y)
//         .lineTo(50 + sigColumnWidth - 40, doc.y)
//         .strokeColor('#CCCCCC')
//         .lineWidth(1)
//         .stroke()
//       doc
//         .fontSize(9)
//         .fillColor('#555555')
//         .text('Authorized signature', 50, doc.y + 2)

//       // Right: Client
//       const rightX = 50 + sigColumnWidth + 50
//       doc
//         .font('Helvetica-Bold')
//         .fontSize(11)
//         .fillColor('#111111')
//         .text(`For ${data.schoolName}`, rightX, sigTop)

//       doc
//         .moveDown(1)
//         .font('Helvetica')
//         .fontSize(10)
//         .fillColor('#444444')
//         .text('Name: ______________________________', rightX)
//         .text('Title: ______________________________', rightX)
//         .text('Date:  ______________________________', rightX)

//       doc.moveDown(1)
//       doc
//         .moveTo(rightX, doc.y)
//         .lineTo(rightX + sigColumnWidth - 40, doc.y)
//         .strokeColor('#CCCCCC')
//         .lineWidth(1)
//         .stroke()
//       doc
//         .fontSize(9)
//         .fillColor('#555555')
//         .text('Client signature', rightX, doc.y + 2)

//       // Footer
//       doc
//         .fontSize(9)
//         .fillColor('#888888')
//         .text(
//           'If you have any questions about this quote, please contact exam.mgmt.edu@gmail.com.',
//           50,
//           750,
//           { align: 'center', width: 500 }
//         )

//       doc.end()
//     } catch (err) {
//       reject(err)
//     }
//   })
// }
