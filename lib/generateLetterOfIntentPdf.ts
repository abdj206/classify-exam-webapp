// lib/generateLetterOfIntentPdf.ts
import PDFDocument from 'pdfkit'

export interface LetterOfIntentPdfData {
  institutionName: string
  contactName?: string
  contactTitle?: string
  developerName: string
  developerTitle?: string
  maxStudentsText?: string       // e.g. "up to 1,000 students"
  country?: string              // e.g. "New York, USA"
  issueDate: string              // e.g. "2025-11-22" or "November 22, 2025"
}

export async function generateLetterOfIntentPdf(
  data: LetterOfIntentPdfData
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: 'LETTER',
        margin: 50,
      })

      const chunks: Buffer[] = []
      doc.on('data', (chunk) => chunks.push(chunk))
      doc.on('end', () => resolve(Buffer.concat(chunks)))
      doc.on('error', (err) => reject(err))

      const {
        institutionName,
        contactName,
        contactTitle,
        developerName,
        developerTitle,
        maxStudentsText = '3000',
        country = '',
        issueDate,
      } = data

      // ---------- HEADER ----------
      // If you have a logo file accessible on the server, you can draw it here:
      // doc.image('/absolute/path/to/logo.png', 50, 40, { width: 120 })

      doc
        .font('Helvetica-Bold')
        .fontSize(18)
        .fillColor('#111111')
        .text('Letter of Intent – Non-Binding', 50, 50)

      doc
        .font('Helvetica')
        .fontSize(10)
        .fillColor('#555555')
        .moveDown(0.5)
        .text('Expression of Interest & Authorization', { align: 'left' })
        .moveDown(0.5)

      // Date / location block on the right
      const rightX = 320
      doc
        .fontSize(10)
        .fillColor('#555555')
        .text(country || '', rightX, 50, { align: 'right' })
        .moveDown(0.5)
        .text(`Date: ${issueDate}`, { align: 'right' })

      doc.moveDown(2)

      // ---------- ADDRESSEE ----------
      doc
        .font('Helvetica')
        .fontSize(11)
        .fillColor('#111111')
        .text(institutionName, 50)

      if (contactName) {
        doc.text(contactName)
      }
      if (contactTitle) {
        doc.text(contactTitle)
      }

      doc.moveDown(1)

      doc
        .fontSize(11)
        .text(
          `Re: Expression of Interest & Authorization to Access the Extended Demo Version of the Exam Management Software`,
          {
            width: 500,
          }
        )

      doc.moveDown(1)

      doc
        .fontSize(11)
        .text(
          `Dear ${contactName ? contactName : 'Sir or Madam'},`,
          { width: 500 }
        )

      doc.moveDown(1)

      // ---------- INTRO / PURPOSE ----------
      doc
        .font('Helvetica')
        .fontSize(10.5)
        .fillColor('#333333')
        .text(
          `This Letter of Intent (“LOI”) sets forth the preliminary and non-binding interest of ` +
            `${institutionName} (“the Institution”) in evaluating and potentially adopting the exam management software ` +
            `developed by ${developerName} (“the Developer”).`,
          {
            width: 500,
            align: 'justify',
          }
        )

      doc.moveDown(0.8)

      doc.text(
        `This LOI serves solely to document the Institution’s intention to explore a potential future collaboration. ` +
          `It is not a contract and does not create any commercial obligations for either party.`,
        {
          width: 500,
          align: 'justify',
        }
      )

      doc.moveDown(1.2)

      // ---------- SECTION 1 ----------
      addSectionTitle(doc, '1. Purpose of this Letter of Intent')

      doc.text(
        `The Institution acknowledges that it has reviewed demo materials (such as video demonstrations, PDF guides or a trial interface) ` +
          `and expresses its preliminary interest in using the Software to support academic examination management.`,
        {
          width: 500,
          align: 'justify',
        }
      )

      doc.moveDown(0.6)
      doc.text('In particular, the Institution intends to:', { width: 500 })

      addBulletList(doc, [
        'Evaluate the Software’s suitability for its internal exam management processes.',
        'Test the core features, flows and integrations made available during the demo period.',
        'Provide feedback to the Developer to help improve the Software.',
      ])

      doc.moveDown(0.8)

      doc.text(
        `This LOI expresses interest only and is not legally enforceable.`,
        {
          width: 500,
          align: 'justify',
        }
      )

      doc.moveDown(1.2)

      // ---------- SECTION 2 ----------
      addSectionTitle(doc, '2. Intent to Collaborate (Non-Binding)')

      doc.text(
        `The Institution expresses its willingness, on a non-binding basis, to continue discussions with the Developer and, ` +
          `subject to the results of the evaluation, to consider the possibility of entering into a commercial agreement in the future.`,
        {
          width: 500,
          align: 'justify',
        }
      )

      doc.moveDown(0.6)

      addBulletList(doc, [
        'This LOI does not obligate the Institution to purchase any product or service.',
        'Any future commercial relationship will require a separate, duly executed contract.',
      ])

      doc.moveDown(1.2)

      // ---------- SECTION 3 ----------
      addSectionTitle(
        doc,
        '3. Authorization to Access the Extended Demo Version (Premium Test Access)'
      )

      doc.text(
        `Upon acceptance of this LOI, the Institution may receive temporary access to an extended demo version of the Software ` +
          `including certain premium features strictly for evaluation purposes.`,
        {
          width: 500,
          align: 'justify',
        }
      )

      doc.moveDown(0.6)

      doc.text('The Institution understands and agrees that this extended demo access:', {
        width: 500,
      })

      addBulletList(doc, [
        'does not constitute a commercial license, subscription or service-level agreement;',
        'is provided “as is,” without guarantees as to availability, performance or fitness for a particular purpose;',
        'may be modified, limited or revoked at any time by the Developer at their sole discretion;',
        'must not be used for real examination sessions in a production environment.',
      ])

      doc.moveDown(1.2)

      // ---------- SECTION 4 ----------
      addSectionTitle(doc, '4. Duration and Evaluation Scope')

      doc.text(
        `The extended demo access is provided for a limited evaluation period of approximately 30 days, with a usage scope of ` +
          `${maxStudentsText}. Any renewal, extension or production-level use will require a separate written agreement.`,
        {
          width: 500,
          align: 'justify',
        }
      )

      doc.moveDown(1.2)

      // ---------- SECTION 5 ----------
      addSectionTitle(doc, '5. No Legal Effect and No Financial Obligations')

      doc.text(
        `This LOI does not create a binding contract, does not involve any payment obligation and does not authorize commercial use ` +
          `of the Software. Any legally binding agreement, including pricing and terms of service, will only arise upon execution of a ` +
          `separate contract once the Developer has formed the appropriate legal business entity.`,
        {
          width: 500,
          align: 'justify',
        }
      )

      doc.moveDown(1.2)

      // ---------- SECTION 6 ----------
      addSectionTitle(doc, '6. Confidentiality')

      doc.text(
        `Both parties agree to keep confidential any non-public information shared in the context of the evaluation, including ` +
          `test credentials, documentation, internal communications and any data accessed within the demo environment, in accordance ` +
          `with their respective internal policies.`,
        {
          width: 500,
          align: 'justify',
        }
      )

      doc.moveDown(1.2)

      // ---------- SECTION 7 ----------
      addSectionTitle(doc, '7. Next Steps After Evaluation')

      doc.text(
        `After the evaluation period, the Institution may, at its sole discretion:`,
        {
          width: 500,
        }
      )

      addBulletList(doc, [
        'request an official commercial proposal;',
        'continue discussions for a potential subscription or pilot project;',
        'decide not to proceed, without any obligation or penalty.',
      ])

      doc.moveDown(1.2)

      // ---------- CLOSING PARAGRAPH ----------
      doc
        .font('Helvetica')
        .fontSize(10.5)
        .fillColor('#333333')
        .text(
          `By signing below, the parties confirm that this LOI accurately reflects their non-binding understanding as of the date indicated above.`,
          {
            width: 500,
            align: 'justify',
          }
        )

      doc.moveDown(2)

      // ---------- SIGNATURE BLOCK ----------
      const sigTop = doc.y
      const sigColWidth = 240

      // Left: Institution
      doc
        .font('Helvetica-Bold')
        .fontSize(11)
        .fillColor('#111111')
        .text('For the Institution', 50, sigTop)

      doc
        .moveDown(0.6)
        .font('Helvetica')
        .fontSize(10)
        .fillColor('#333333')
        .text(`Institution: ${institutionName}`)
        .text('Name: ______________________________')
        .text('Title: ______________________________')
        .text('Date:  ______________________________')

      doc.moveDown(1)
      const lineYLeft = doc.y
      doc
        .moveTo(50, lineYLeft)
        .lineTo(50 + sigColWidth, lineYLeft)
        .strokeColor('#CCCCCC')
        .lineWidth(1)
        .stroke()
      doc
        .fontSize(9)
        .fillColor('#555555')
        .text('Signature', 50, lineYLeft + 3)

      // Right: Developer
      const rightColX = 50 + sigColWidth + 60
      doc
        .font('Helvetica-Bold')
        .fontSize(11)
        .fillColor('#111111')
        .text('For the Developer', rightColX, sigTop)

      doc
        .moveDown(0.6)
        .font('Helvetica')
        .fontSize(10)
        .fillColor('#333333')
        .text(`Name: ${developerName}`)
        .text(`Title: ${developerTitle || '____________________________'}`)
        .text(`Date:  ${issueDate || '____________________________'}`)

      doc.moveDown(1)
      const lineYRight = doc.y
      doc
        .moveTo(rightColX, lineYRight)
        .lineTo(rightColX + sigColWidth, lineYRight)
        .strokeColor('#CCCCCC')
        .lineWidth(1)
        .stroke()
      doc
        .fontSize(9)
        .fillColor('#555555')
        .text('Signature', rightColX, lineYRight + 3)

      // Footer
      doc
        .font('Helvetica')
        .fontSize(9)
        .fillColor('#888888')
        .text(
          'This Letter of Intent is non-binding and does not create any commercial obligation for either party.',
          50,
          750,
          { align: 'center', width: 500 }
        )

      doc.end()
    } catch (err) {
      reject(err)
    }
  })
}

// ---------- helpers ----------

function addSectionTitle(doc: PDFKit.PDFDocument, title: string) {
  doc
    .font('Helvetica-Bold')
    .fontSize(11.5)
    .fillColor('#111111')
    .text(title, { width: 500 })
    .moveDown(0.4)
}

function addBulletList(doc: PDFKit.PDFDocument, items: string[]) {
  doc
    .font('Helvetica')
    .fontSize(10.5)
    .fillColor('#333333')

  const bulletIndent = 64
  const textIndent = 74

  items.forEach((item) => {
    doc.text('•', bulletIndent, doc.y, { continued: true })
    doc.text(` ${item}`, textIndent, doc.y, {
      width: 500 - textIndent + 50,
      align: 'justify',
    })
    doc.moveDown(0.2)
  })
}
