import { useState } from 'react';
import referenceImage from '../assets/4e755b9d2d77483a9dc5afae177d133c27b36c98.png';
import { SectionHeader } from './components/SectionHeader';
import { ClinicalScenario } from './components/ClinicalScenario';
import { ActiveRecallCard } from './components/ActiveRecallCard';
import { DragDropLabel } from './components/DragDropLabel';
import { ImageHotspot } from './components/ImageHotspot';
import { SequenceExercise } from './components/SequenceExercise';
import { DragDropMatching } from './components/DragDropMatching';
import { XRayComparison } from './components/XRayComparison';
import { DecisionTree } from './components/DecisionTree';

interface Answers {
  [key: string]: string;
}

export default function App() {
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded-full text-sm">
            Clinical Anatomy Worksheet
          </div>
          <h1 className="mb-3">Clavicle, Sternum & Shoulder Girdle</h1>
          <p className="text-lg text-muted-foreground mb-2">
            Why These Landmarks Matter in Hospital Practice
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Medical students don't just need to know where the bone is; they need to know why it matters in a hospital.
          </p>
        </div>

        {/* Reference Image */}
        <div className="mb-10 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="mb-4 text-center">Reference Anatomy</h3>
          <img 
            src={referenceImage} 
            alt="Anatomical diagram showing clavicle, sternum and shoulder girdle" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* SECTION 1: Sternal Angle (Angle of Louis) */}
        <div className="mb-12">
          <SectionHeader
            number={1}
            title="The Sternal Angle (Angle of Louis)"
            subtitle="The Junction Between Manubrium and Body of Sternum"
            focus="This is a 'landmark' feature often tested in physical exams and critical for cardiac auscultation."
          />

          <div className="space-y-6">
            {/* Clinical Scenario 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="A physician is performing a physical exam and needs to locate the 2nd intercostal space to listen to the aortic valve. The patient is lying supine on the exam table."
                question="Which bony landmark should the physician palpate first to accurately locate the 2nd intercostal space?"
                answer="The Sternal Angle (Angle of Louis)"
                explanation="The sternal angle marks the articulation of the 2nd rib with the sternum. Once located, the physician can count intercostal spaces from this reference point. The 2nd intercostal space is immediately lateral to this landmark."
                userAnswer={answers.q1}
                onAnswerChange={(answer) => handleAnswerChange('q1', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <ActiveRecallCard
                question="At what vertebral level does the Sternal Angle correspond to?"
                answer="T4–T5 intervertebral disc. This is also the level where the trachea bifurcates into the left and right main bronchi."
                hint="Think about thoracic vertebrae in the mid-chest"
              />
              <ActiveRecallCard
                question="Name three anatomical structures that occur at the level of the Sternal Angle."
                answer="1) 2nd rib articulation, 2) Bifurcation of the trachea, 3) Division between superior and inferior mediastinum, 4) Aortic arch begins and ends"
                hint="Think about respiratory, cardiovascular, and anatomical divisions"
              />
            </div>

            {/* Clinical Scenario 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="During a cardiology rotation, you observe that the sternal angle is being used as a reference point for multiple purposes beyond just counting ribs."
                question="Why is the sternal angle clinically significant beyond serving as a landmark for the 2nd rib?"
                answer="It marks the boundary between the superior and inferior mediastinum and is at the level of several important structures: tracheal bifurcation, aortic arch, and T4-T5 vertebral level"
                explanation="This makes it invaluable for interpreting chest X-rays, understanding mediastinal anatomy, and planning surgical approaches."
                userAnswer={answers.q2}
                onAnswerChange={(answer) => handleAnswerChange('q2', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: Clavicle Fractures */}
        <div className="mb-12">
          <SectionHeader
            number={2}
            title="Clavicle Fractures"
            subtitle="Understanding the S-Curve and Clinical Implications"
            focus="The clavicle is the most commonly fractured bone in the body - knowing its anatomy predicts injury patterns."
          />

          <div className="space-y-6">
            {/* Clinical Scenario 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="A 19-year-old rugby player presents to the emergency department after falling on an outstretched hand (FOOSH injury). He has pain and swelling over his shoulder area with visible deformity."
                question="Which part of the clavicle is most susceptible to fracture during a FOOSH injury, and why?"
                answer="The junction of the medial 2/3 and lateral 1/3 of the clavicle"
                explanation="This is the weakest point where the curvature changes from the medial convex curve to the lateral concave curve. Approximately 80% of clavicle fractures occur at this location due to biomechanical forces and the lack of ligamentous support at this transition point."
                userAnswer={answers.q3}
                onAnswerChange={(answer) => handleAnswerChange('q3', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <ActiveRecallCard
                question="Why is the clavicle described as a 'strut' in the shoulder girdle?"
                answer="It holds the upper limb away from the trunk to allow for maximum range of motion. It acts as a mechanical strut connecting the axial skeleton to the appendicular skeleton."
                hint="Think about its functional role in shoulder movement"
              />
              <ActiveRecallCard
                question="What is the typical displacement pattern seen in a middle-third clavicle fracture?"
                answer="The medial fragment is pulled superiorly by the sternocleidomastoid muscle, while the lateral fragment is pulled inferiorly by the weight of the arm and pectoralis major muscle."
                hint="Consider muscle attachments and gravity"
              />
            </div>

            {/* Clinical Scenario 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="You're examining a patient with a suspected clavicle fracture. On palpation, you notice the lateral fragment seems to be displaced downward."
                question="Which muscles are responsible for the typical displacement pattern in clavicle fractures?"
                answer="Sternocleidomastoid (pulls medial fragment superiorly) and Pectoralis major/gravity (pulls lateral fragment inferiorly and medially)"
                explanation="Understanding muscle attachments helps predict fracture displacement, guide reduction techniques, and explain why some fractures require surgical fixation."
                userAnswer={answers.q4}
                onAnswerChange={(answer) => handleAnswerChange('q4', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Card */}
            <ActiveRecallCard
              question="What important neurovascular structures lie directly beneath the clavicle, making fractures potentially dangerous?"
              answer="The subclavian artery and vein, and the brachial plexus. Fracture fragments can potentially injure these structures, though it's rare. This is why neurovascular assessment is critical in clavicle fractures."
              hint="Think about what passes between the clavicle and first rib"
            />
          </div>
        </div>

        {/* SECTION 3: Jugular Notch & Sternum */}
        <div className="mb-12">
          <SectionHeader
            number={3}
            title="The Jugular Notch & Sternum"
            subtitle="Surface Anatomy and Emergency Procedures"
            focus="Critical for identifying midline structures and boundaries of the superior mediastinum."
          />

          <div className="space-y-6">
            {/* Clinical Scenario 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="In an emergency department, a patient with severe upper airway obstruction requires an emergency surgical airway. The physician needs to identify the correct anatomical landmarks before making an incision."
                question="Which notch serves as the superior boundary for identifying the midline of the neck in an emergency tracheotomy?"
                answer="The Jugular (Suprasternal) Notch"
                explanation="The jugular notch is easily palpable and serves as a critical landmark. In an emergency cricothyroidotomy or tracheotomy, it helps identify the midline and provides a reference point. The incision is typically made 1-2 cm above the sternal notch for a tracheotomy."
                userAnswer={answers.q5}
                onAnswerChange={(answer) => handleAnswerChange('q5', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <ActiveRecallCard
                question="True or False: The Xiphoid process remains cartilaginous throughout an entire human life."
                answer="FALSE. The xiphoid process typically ossifies (turns to bone) around age 40, though timing varies. It may remain partially cartilaginous in some individuals."
                hint="Think about bone development over time"
              />
              <ActiveRecallCard
                question="During CPR, why is it important to avoid the xiphoid process when performing chest compressions?"
                answer="Applying force to the xiphoid process can cause it to fracture and potentially lacerate the liver, causing internal bleeding. Compressions should be on the lower half of the sternum, about 2 inches above the xiphoid."
                hint="Consider what organs lie beneath the xiphoid"
              />
            </div>

            {/* Clinical Scenario 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="A medical student is learning proper CPR technique on a mannequin. The instructor asks them to identify the correct hand placement for chest compressions."
                question="Where should the heel of the hand be placed in relation to the sternum and xiphoid process for effective CPR?"
                answer="On the lower half of the sternum, approximately 2 finger widths (4-5 cm) above the xiphoid process, in the center of the chest"
                explanation="This position allows effective compression of the heart between the sternum and spine while avoiding injury to the xiphoid process and underlying liver. Compressions should be 2-2.4 inches (5-6 cm) deep in adults."
                userAnswer={answers.q6}
                onAnswerChange={(answer) => handleAnswerChange('q6', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Card */}
            <ActiveRecallCard
              question="What structures can be palpated through the jugular notch, and what clinical information can this provide?"
              answer="The trachea can be palpated through the jugular notch. Deviation of the trachea from midline can indicate pneumothorax, pleural effusion, or mediastinal masses. The brachiocephalic artery may also be palpable in thin individuals."
              hint="Think about what lies directly behind this notch"
            />
          </div>
        </div>

        {/* SECTION 4: Acromioclavicular (AC) Joint */}
        <div className="mb-12">
          <SectionHeader
            number={4}
            title="Acromioclavicular (AC) Joint"
            subtitle="Shoulder Separations and Athletic Injuries"
            focus="AC joint injuries are among the most common shoulder injuries in contact sports and falls."
          />

          <div className="space-y-6">
            {/* Clinical Scenario 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="A 24-year-old hockey player is checked into the boards and falls directly onto the point of his shoulder. He presents with a visible 'step-off' deformity at the superior aspect of the shoulder where the distal clavicle appears elevated."
                question="What injury has occurred, and which ligaments are damaged in this type of injury?"
                answer="AC joint separation (likely Type III or higher). The acromioclavicular ligament and coracoclavicular ligaments (trapezoid and conoid) are torn"
                explanation="AC separations are graded I-VI. Type III involves complete disruption of both AC and CC ligaments, causing the characteristic step-off deformity as the clavicle is no longer anchored to the scapula and appears elevated."
                userAnswer={answers.q7}
                onAnswerChange={(answer) => handleAnswerChange('q7', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <ActiveRecallCard
                question="What are the two components of the coracoclavicular ligament, and why are they clinically important?"
                answer="The Trapezoid (lateral) and Conoid (medial) ligaments. They provide vertical stability to the AC joint. Complete disruption of both ligaments indicates a Type III or higher AC separation and may require surgical repair."
                hint="Think about ligaments connecting the clavicle to the coracoid process"
              />
              <ActiveRecallCard
                question="How can you clinically differentiate between an AC joint separation and a clavicle fracture?"
                answer="AC separation shows tenderness and deformity specifically at the AC joint with a step-off deformity. Clavicle fracture shows tenderness along the shaft with possible tenting of skin. X-rays confirm the diagnosis."
                hint="Consider the location of pain and deformity"
              />
            </div>

            {/* Clinical Scenario 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="During a physical examination of an athlete with shoulder pain, you ask the patient to adduct their arm across their body (cross-body adduction test). This reproduces their pain."
                question="Which joint is this test assessing, and what does a positive test indicate?"
                answer="The AC joint. A positive cross-body adduction test (pain with adduction across the chest) indicates AC joint pathology such as AC arthritis or AC joint separation"
                explanation="This test compresses the AC joint. It's one of the most specific tests for AC joint pathology and is routinely used in shoulder examinations."
                userAnswer={answers.q8}
                onAnswerChange={(answer) => handleAnswerChange('q8', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>
          </div>
        </div>

        {/* SECTION 5: Sternoclavicular (SC) Joint */}
        <div className="mb-12">
          <SectionHeader
            number={5}
            title="Sternoclavicular (SC) Joint"
            subtitle="The Only Bony Connection of Upper Limb to Axial Skeleton"
            focus="SC joint dislocations are rare but potentially life-threatening due to proximity to mediastinal structures."
          />

          <div className="space-y-6">
            {/* Clinical Scenario 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="A patient involved in a head-on motor vehicle collision presents with anterior chest trauma, asymmetry at the base of the neck, and difficulty swallowing. The medial end of the clavicle appears prominent posteriorly."
                question="What is the most concerning diagnosis, and why is this a medical emergency?"
                answer="Posterior sternoclavicular joint dislocation"
                explanation="Posterior SC dislocations can compress vital mediastinal structures including the trachea, esophagus, great vessels (brachiocephalic vein, carotid artery), and nerves. This can cause dysphagia, dyspnea, vascular compromise, or even death. It requires urgent reduction, often in the operating room."
                userAnswer={answers.q9}
                onAnswerChange={(answer) => handleAnswerChange('q9', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <ActiveRecallCard
                question="What type of joint is the sternoclavicular joint?"
                answer="Saddle-type synovial joint (though it functions more like a ball-and-socket due to its range of motion). It's the only bony articulation between the upper limb and the axial skeleton."
                hint="Think about joint classifications"
              />
              <ActiveRecallCard
                question="Which ligament stabilizes the SC joint by connecting the clavicle to the first rib?"
                answer="The costoclavicular ligament (also called the rhomboid ligament). It provides strong inferior support and limits excessive elevation of the medial clavicle."
                hint="'Costo' refers to rib, 'clavicular' refers to clavicle"
              />
            </div>

            {/* Clinical Scenario 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="You're reviewing a CT scan of the chest for a patient with suspected SC joint injury. The radiologist mentions that SC joint injuries are often missed on plain X-rays."
                question="Why are SC joint injuries difficult to visualize on standard chest X-rays, and what imaging is preferred?"
                answer="CT scan with 3D reconstruction"
                explanation="The SC joint is difficult to visualize on plain X-rays due to overlapping structures (ribs, spine, mediastinum). CT provides excellent bony detail and can also assess for mediastinal complications. Special X-ray views (serendipity view) can be attempted but CT is the gold standard."
                userAnswer={answers.q10}
                onAnswerChange={(answer) => handleAnswerChange('q10', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>
          </div>
        </div>

        {/* SECTION 6: Interactive Drag & Drop Labeling */}
        <div className="mb-12">
          <SectionHeader
            number={6}
            title="Drag & Drop Anatomy Challenge"
            subtitle="Test Your Knowledge Interactively"
            focus="Practice identifying structures by dragging labels to the correct locations - just like you'll need to do on practical exams!"
          />

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <DragDropLabel
              imageSrc={referenceImage}
              labels={[
                { id: 'label-1', text: 'Clavicle', correctTarget: 'zone-1' },
                { id: 'label-2', text: 'Manubrium', correctTarget: 'zone-2' },
                { id: 'label-3', text: 'Sternal Angle', correctTarget: 'zone-3' },
                { id: 'label-4', text: 'Body of Sternum', correctTarget: 'zone-4' },
                { id: 'label-5', text: 'Xiphoid Process', correctTarget: 'zone-5' },
                { id: 'label-6', text: 'Jugular Notch', correctTarget: 'zone-6' },
              ]}
              dropZones={[
                { id: 'zone-1', x: 50, y: 15, label: 'Clavicle' },
                { id: 'zone-2', x: 52, y: 45, label: 'Manubrium' },
                { id: 'zone-3', x: 52, y: 52, label: 'Sternal Angle' },
                { id: 'zone-4', x: 52, y: 60, label: 'Body of Sternum' },
                { id: 'zone-5', x: 48, y: 75, label: 'Xiphoid Process' },
                { id: 'zone-6', x: 52, y: 35, label: 'Jugular Notch' },
              ]}
              showResults={showResults}
            />
          </div>
        </div>

        {/* SECTION 7: Interactive Image Hotspot Discovery */}
        <div className="mb-12">
          <SectionHeader
            number={7}
            title="Discover Anatomical Structures"
            subtitle="Click to Reveal Information"
            focus="Explore the anatomy interactively - click on different regions to learn about each structure."
          />

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <ImageHotspot
              imageSrc={referenceImage}
              instructions="Click on different regions of the image to discover anatomical information. Try to find all structures!"
              hotspots={[
                {
                  id: 'h1',
                  x: 35,
                  y: 10,
                  width: 30,
                  height: 12,
                  label: 'Clavicle',
                  info: 'The clavicle is an S-shaped bone that acts as a strut connecting the upper limb to the axial skeleton. It is the most commonly fractured bone, typically at the junction of the medial 2/3 and lateral 1/3.',
                },
                {
                  id: 'h2',
                  x: 48,
                  y: 32,
                  width: 10,
                  height: 8,
                  label: 'Jugular (Suprasternal) Notch',
                  info: 'A palpable depression at the superior border of the manubrium. Critical landmark for central line placement, assessing jugular venous pressure, and emergency airway procedures.',
                },
                {
                  id: 'h3',
                  x: 48,
                  y: 42,
                  width: 10,
                  height: 8,
                  label: 'Manubrium',
                  info: 'The superior portion of the sternum that articulates with the clavicles and first two ribs. Provides protection to the great vessels of the superior mediastinum.',
                },
                {
                  id: 'h4',
                  x: 48,
                  y: 50,
                  width: 10,
                  height: 4,
                  label: 'Sternal Angle (Angle of Louis)',
                  info: 'The ridge at T4-T5 level where manubrium meets the body of sternum. Critical for counting ribs (marks 2nd rib), cardiac auscultation, and identifies the tracheal bifurcation level.',
                },
                {
                  id: 'h5',
                  x: 48,
                  y: 55,
                  width: 10,
                  height: 15,
                  label: 'Body of Sternum',
                  info: 'The longest part of the sternum. Provides attachment for ribs 3-7. This is the target area for chest compressions during CPR (lower half of the sternum).',
                },
                {
                  id: 'h6',
                  x: 45,
                  y: 72,
                  width: 10,
                  height: 8,
                  label: 'Xiphoid Process',
                  info: 'The smallest and most inferior part of the sternum. Remains cartilaginous until age 40. Must be avoided during CPR as compression can cause liver laceration.',
                },
                {
                  id: 'h7',
                  x: 30,
                  y: 18,
                  width: 12,
                  height: 12,
                  label: 'Acromioclavicular Joint',
                  info: 'Joint between the acromion of the scapula and lateral end of clavicle. Common site of sports injuries (AC separations), graded I-VI based on ligament damage.',
                },
              ]}
            />
          </div>
        </div>

        {/* SECTION 8: Procedural Sequencing */}
        <div className="mb-12">
          <SectionHeader
            number={8}
            title="Clinical Procedure Sequencing"
            subtitle="Order Matters in Medicine"
            focus="Practice arranging clinical steps in the correct order - essential for OSCE exams and real patient care."
          />

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <SequenceExercise
                title="Steps for Locating the 2nd Intercostal Space During Cardiac Auscultation"
                steps={[
                  { id: 's1', text: 'Position the patient supine or at 45° angle', order: 1 },
                  { id: 's2', text: 'Palpate the jugular notch at the base of the neck', order: 2 },
                  { id: 's3', text: 'Move fingers inferiorly to feel the sternal angle ridge', order: 3 },
                  { id: 's4', text: 'Move laterally from the sternal angle to find the 2nd rib', order: 4 },
                  { id: 's5', text: 'The space below the 2nd rib is the 2nd intercostal space', order: 5 },
                  { id: 's6', text: 'Place stethoscope at 2nd right intercostal space for aortic valve', order: 6 },
                ]}
                showResults={showResults}
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <SequenceExercise
                title="Emergency Management of Suspected Posterior SC Dislocation"
                steps={[
                  { id: 'e1', text: 'Assess airway, breathing, and circulation (ABC)', order: 1 },
                  { id: 'e2', text: 'Evaluate for signs of mediastinal compression (dysphagia, dyspnea, vascular compromise)', order: 2 },
                  { id: 'e3', text: 'Immobilize the patient and obtain IV access', order: 3 },
                  { id: 'e4', text: 'Order immediate CT scan with 3D reconstruction', order: 4 },
                  { id: 'e5', text: 'Consult orthopedic surgery and cardiothoracic surgery', order: 5 },
                  { id: 'e6', text: 'Prepare for closed reduction in operating room (not ED)', order: 6 },
                ]}
                showResults={showResults}
              />
            </div>
          </div>
        </div>

        {/* SECTION 9: Drag & Drop Matching */}
        <div className="mb-12">
          <SectionHeader
            number={9}
            title="Clinical Correlations Matching"
            subtitle="Connect Anatomy to Clinical Practice"
            focus="Match anatomical structures with their clinical significance - the key to thinking like a physician."
          />

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <DragDropMatching
              pairs={[
                {
                  id: 'm1',
                  term: 'Sternal Angle',
                  definition: 'Landmark at T4-T5 level for counting ribs and locating 2nd intercostal space for cardiac auscultation',
                },
                {
                  id: 'm2',
                  term: 'Jugular Notch',
                  definition: 'Palpable landmark for central line placement and assessing jugular venous pressure (JVP)',
                },
                {
                  id: 'm3',
                  term: 'Xiphoid Process',
                  definition: 'Must be avoided during CPR compressions to prevent liver laceration',
                },
                {
                  id: 'm4',
                  term: 'Clavicle Middle Third',
                  definition: 'Most common fracture site due to S-curve transition and lack of ligamentous support',
                },
                {
                  id: 'm5',
                  term: 'Coracoclavicular Ligaments',
                  definition: 'Trapezoid and conoid ligaments that stabilize AC joint; torn in Type III separations',
                },
              ]}
              showResults={showResults}
            />
          </div>
        </div>

        {/* SECTION 10: X-Ray Interpretation */}
        <div className="mb-12">
          <SectionHeader
            number={10}
            title="Imaging Interpretation Challenge"
            subtitle="Read X-Rays Like a Radiologist"
            focus="Develop pattern recognition skills for identifying pathology on imaging - crucial for clinical practice."
          />

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <XRayComparison
              title="Case: 25-year-old cyclist after collision"
              normalImage={referenceImage}
              abnormalImage={referenceImage}
              question="Based on the patient X-ray, what is the most likely diagnosis?"
              findings={[
                {
                  id: 'f1',
                  label: 'Midshaft clavicle fracture',
                  description: 'Correct! The X-ray shows a fracture at the junction of medial 2/3 and lateral 1/3 of the clavicle - the most common location. Note the displacement with the medial fragment pulled superiorly by SCM and the lateral fragment pulled inferiorly by gravity and pec major.',
                  isCorrect: true,
                },
                {
                  id: 'f2',
                  label: 'AC joint separation Type III',
                  description: 'Incorrect. AC separations show widening of the AC joint space and elevation of the clavicle relative to the acromion, not a fracture line through the clavicle shaft.',
                  isCorrect: false,
                },
                {
                  id: 'f3',
                  label: 'Sternoclavicular dislocation',
                  description: 'Incorrect. SC dislocations occur at the medial end of the clavicle where it meets the sternum, not in the mid-shaft.',
                  isCorrect: false,
                },
                {
                  id: 'f4',
                  label: 'Normal clavicle with soft tissue swelling',
                  description: 'Incorrect. There is a clear fracture line visible through the clavicle shaft with displacement of fragments.',
                  isCorrect: false,
                },
              ]}
              userAnswer={answers.xray1}
              onAnswerSelect={(answer) => handleAnswerChange('xray1', answer)}
              showResults={showResults}
            />
          </div>
        </div>

        {/* SECTION 11: Clinical Decision Tree */}
        <div className="mb-12">
          <SectionHeader
            number={11}
            title="Clinical Decision Making"
            subtitle="Navigate Complex Patient Scenarios"
            focus="Practice clinical reasoning through interactive decision trees - mimics real-world patient management."
          />

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <DecisionTree
              title="Shoulder Pain After Trauma"
              scenario="A 28-year-old mountain biker presents to the ED with shoulder pain after falling directly onto the shoulder. You need to determine the diagnosis and management."
              startNodeId="node1"
              nodes={[
                {
                  id: 'node1',
                  question: 'On physical examination, what key finding do you look for first?',
                  options: [
                    {
                      text: 'Location of maximal tenderness',
                      nextNode: 'node2',
                      feedback: 'Good start! Determining whether tenderness is over the AC joint, clavicle shaft, or SC joint helps narrow your differential.',
                    },
                    {
                      text: 'Neurovascular status',
                      nextNode: 'node1b',
                      feedback: 'While important for any trauma, you should first identify where the injury is located before detailed neurovascular assessment.',
                    },
                  ],
                },
                {
                  id: 'node1b',
                  question: 'After ensuring neurovascular status is intact, where is the maximal tenderness?',
                  options: [
                    {
                      text: 'Over the AC joint at the point of the shoulder',
                      nextNode: 'node3',
                      feedback: 'This localizes the injury to the AC joint. You proceed with specific AC joint examination.',
                    },
                    {
                      text: 'Along the clavicle shaft',
                      nextNode: 'node4',
                      feedback: 'This suggests a clavicle fracture. You need imaging to confirm.',
                    },
                  ],
                },
                {
                  id: 'node2',
                  question: 'Tenderness is maximal over the AC joint. What do you observe?',
                  options: [
                    {
                      text: 'Visible step-off deformity with elevated distal clavicle',
                      nextNode: 'node5',
                      feedback: 'Classic finding for AC separation! The deformity indicates likely Type III or higher separation.',
                    },
                    {
                      text: 'No visible deformity but pain with cross-body adduction',
                      nextNode: 'node6',
                      feedback: 'Positive cross-body adduction test suggests AC joint pathology but may be lower grade separation or AC arthritis.',
                    },
                  ],
                },
                {
                  id: 'node3',
                  question: 'You see a step-off deformity. What imaging do you order?',
                  options: [
                    {
                      text: 'AP shoulder X-ray with and without weights',
                      nextNode: 'node7',
                      feedback: 'Excellent choice! Weight-bearing views help differentiate Type II from Type III AC separations by showing the degree of separation.',
                    },
                    {
                      text: 'MRI of the shoulder',
                      nextNode: 'node7b',
                      feedback: 'MRI is expensive and unnecessary for initial AC separation diagnosis. X-rays are sufficient and more cost-effective.',
                    },
                  ],
                },
                {
                  id: 'node4',
                  question: 'You suspect clavicle fracture. What imaging do you order?',
                  options: [
                    {
                      text: 'Clavicle X-ray (AP and 45° cephalic tilt views)',
                      nextNode: 'node8',
                      feedback: 'Perfect! These standard views will show most clavicle fractures. The 45° view provides better visualization of displacement.',
                    },
                    {
                      text: 'CT scan of the shoulder',
                      nextNode: 'node8b',
                      feedback: 'CT is unnecessary for most clavicle fractures. Plain X-rays are adequate unless suspecting mediastinal complications.',
                    },
                  ],
                },
                {
                  id: 'node5',
                  question: 'You order X-rays. What do you expect to see?',
                  options: [
                    {
                      text: 'Increased coracoclavicular distance >100-130% compared to uninjured side',
                      nextNode: 'final1',
                      isCorrect: true,
                      feedback: 'Excellent! This confirms Type III AC separation with complete disruption of AC and CC ligaments. Treatment options include conservative management for most patients or surgical repair for high-demand athletes.',
                    },
                    {
                      text: 'Normal coracoclavicular distance',
                      nextNode: 'final2',
                      isCorrect: false,
                      feedback: 'This would suggest a lower grade separation, but the visible step-off deformity indicates Type III with disrupted CC ligaments showing increased CC distance.',
                    },
                  ],
                },
                {
                  id: 'node6',
                  question: 'No deformity but positive provocative test. What grade separation do you suspect?',
                  options: [
                    {
                      text: 'Type I or II AC separation',
                      nextNode: 'final3',
                      isCorrect: true,
                      feedback: 'Correct! Type I (sprain of AC ligament) and Type II (AC ligament torn but CC ligaments intact) don\'t show significant deformity. Treatment is conservative with rest, ice, and gradual return to activity.',
                    },
                    {
                      text: 'Type III or higher',
                      nextNode: 'final4',
                      isCorrect: false,
                      feedback: 'Type III and higher separations show visible deformity with step-off. Without deformity, this is likely Type I or II.',
                    },
                  ],
                },
                {
                  id: 'node7',
                  question: 'X-rays show significantly increased CC distance. What is your diagnosis and initial management?',
                  options: [
                    {
                      text: 'Type III AC separation; sling and referral to orthopedics',
                      nextNode: 'final1',
                      isCorrect: true,
                      feedback: 'Excellent clinical reasoning! You correctly identified the injury, ordered appropriate imaging, and planned proper management. Most Type III AC separations are managed conservatively unless the patient is a high-demand athlete.',
                    },
                  ],
                },
                {
                  id: 'node7b',
                  question: 'MRI was expensive and unnecessary. Standard X-rays would have been sufficient.',
                  options: [
                    {
                      text: 'Order X-rays now instead',
                      nextNode: 'node7',
                      feedback: 'Better late than never! Always consider cost-effectiveness in your imaging choices.',
                    },
                  ],
                },
                {
                  id: 'node8',
                  question: 'X-rays show midshaft clavicle fracture with some displacement. What is your management?',
                  options: [
                    {
                      text: 'Sling immobilization and orthopedic follow-up in 1 week',
                      nextNode: 'final5',
                      isCorrect: true,
                      feedback: 'Perfect! Most midshaft clavicle fractures heal well with conservative management. Surgical indications include: >2cm displacement, skin tenting, neurovascular compromise, or open fracture.',
                    },
                    {
                      text: 'Immediate surgical referral for all clavicle fractures',
                      nextNode: 'final6',
                      isCorrect: false,
                      feedback: 'Not all clavicle fractures need surgery. Most midshaft fractures without complications are managed conservatively.',
                    },
                  ],
                },
                {
                  id: 'node8b',
                  question: 'CT was unnecessary. X-rays would have been sufficient and more cost-effective.',
                  options: [
                    {
                      text: 'Order X-rays now',
                      nextNode: 'node8',
                      feedback: 'Good correction! Always consider the most cost-effective approach first.',
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mb-10">
          {!showResults ? (
            <button
              onClick={handleSubmit}
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Check My Answers
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-10 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Practice Again
            </button>
          )}
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-6 mb-8 shadow-md">
          <h3 className="mb-4 text-green-900">🎯 Key Clinical Takeaways</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-green-800 mb-2">
                <strong>Sternal Angle:</strong> Your reference point for counting ribs and identifying cardiac landmarks.
              </p>
              <p className="text-green-800 mb-2">
                <strong>Clavicle:</strong> Most commonly fractured bone - know the anatomy to predict complications.
              </p>
              <p className="text-green-800">
                <strong>Jugular Notch:</strong> Critical for emergency airway procedures and assessing JVP.
              </p>
            </div>
            <div>
              <p className="text-green-800 mb-2">
                <strong>AC Joint:</strong> Common in sports - learn to grade separations clinically.
              </p>
              <p className="text-green-800 mb-2">
                <strong>SC Joint:</strong> Rare injury but potentially life-threatening - always consider mediastinal structures.
              </p>
              <p className="text-green-800">
                <strong>CPR Position:</strong> Lower sternum, avoid xiphoid to prevent liver injury.
              </p>
            </div>
          </div>
        </div>

        {/* Study Strategy */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
          <h3 className="mb-4">📚 How to Use This Worksheet</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <strong>1. Active Recall First:</strong> Click the blue active recall cards to test yourself before checking answers. This strengthens memory formation.
            </p>
            <p>
              <strong>2. Clinical Context:</strong> Read each clinical scenario carefully. Medicine is about pattern recognition - these scenarios mimic real patient presentations.
            </p>
            <p>
              <strong>3. Spaced Repetition:</strong> Come back to this worksheet multiple times over several days. Review incorrect answers especially.
            </p>
            <p>
              <strong>4. Physical Examination:</strong> Find these landmarks on yourself or a study partner. Palpate the jugular notch, sternal angle, and clavicle.
            </p>
            <p>
              <strong>5. Imaging Review:</strong> After completing this worksheet, review X-rays and CT scans showing these structures and their injuries.
            </p>
          </div>
        </div>

        {/* Additional Resources & Links */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg p-6 mt-8 shadow-md">
          <h3 className="mb-4 text-blue-900">🔗 Additional Resources & Connect</h3>
          <div className="space-y-3 text-sm">
            <p className="text-blue-800 mb-4">
              Explore more clinical content and connect with us on various platforms:
            </p>
            <div className="grid gap-3">
              <a 
                href="https://open.substack.com/pub/clinicalartist/p/architecting-clinical-distinction?r=4n9mqa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900 hover:underline transition-colors"
              >
                <span>📰</span>
                <span>Architecting Clinical Distinction - Substack Article</span>
              </a>
              <a 
                href="https://x.com/senushid/status/2004966418316754982?s=46" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900 hover:underline transition-colors"
              >
                <span>🐦</span>
                <span>Follow on X (Twitter)</span>
              </a>
              <a 
                href="https://senushidinara.gumroad.com/l/bteqd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900 hover:underline transition-colors"
              >
                <span>🛒</span>
                <span>Get The Aesthetic Clinician on Gumroad</span>
              </a>
              <a 
                href="https://www.tiktok.com/@themedarchitest?_r=1&_t=ZS-92aybvjldGW" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900 hover:underline transition-colors"
              >
                <span>🎵</span>
                <span>Follow on TikTok @themedarchitest</span>
              </a>
              <a 
                href="https://www.linkedin.com/posts/senushi-dinara-794b08313_the-aesthetic-clinician-interactive-anatomy-activity-7410728651006107648-l1QS?utm_medium=ios_app&rcm=ACoAAE-4bmABDsG7koHiBE1LVSIMXxcrRXe_WNg&utm_source=social_share_send&utm_campaign=copy_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900 hover:underline transition-colors"
              >
                <span>💼</span>
                <span>Connect on LinkedIn - The Aesthetic Clinician</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}