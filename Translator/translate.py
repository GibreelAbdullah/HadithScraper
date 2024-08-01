from deep_translator import GoogleTranslator

fin = open("Translator/ara-bukhari.txt", "r")
fout = open("Translator/eng-bukhari.txt", "a")

lines:list[str] = fin.readlines()

count=0
for line in lines:
    count += 1
    if(count <= 121):
        continue
    numberAndText = line.split(' | ')
    # translations = 
    if(len(numberAndText[1]) > 4999):
        fout.write(numberAndText[0] + ' | SIZE_EXCEEDED\n')
    else:
        fout.write(numberAndText[0] + ' | ' + GoogleTranslator(source='ar', target='en').translate(numberAndText[1]) + '\n')

fin.close()
fout.close()