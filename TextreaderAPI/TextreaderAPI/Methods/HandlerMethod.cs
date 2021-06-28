using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;


namespace TextreaderAPI.Methods
{
    public class HandlerMethod
    {
        public List<string> AllWords { get; set; }
        public string input { get; set; }

        //--- Array with the most common punctuations.
        string[] enders = { ".", ",", "!", "?", "_", @"\", ";" };

        public HandlerMethod(string _text)
        {
            input = _text;
            AllWords = new List<string>();



            string receivedText = Regex.Replace(_text, @"\s+", " ");
            receivedText = receivedText.Replace(@"\", " ");

            //--- These loops loop through the list of words, and removes all the punctuations defined in string[] enders array. And then adds all the words in List<string>AllWords 
            string[] temp = receivedText.Split(" ");
            for (int i = 0; i < temp.Count(); i++)
            {
                if (temp[i] != "")
                {
                    for (int ii = 0; ii < enders.Count(); ii++)
                    {
                        if (temp[i].EndsWith(enders[ii]))
                        {
                            temp[i] = temp[i].Remove(temp[i].Length - 1);
                            break;
                        }
                    }
                    AllWords.Add(temp[i]);
                }
            }
        }
        #region Metod för att hitta ordet som skrivs flest gånger i texten
        public string TopOccurence()
        {
            Dictionary<string, int> myDictionary = new Dictionary<string, int>();

            var comparer = StringComparer.OrdinalIgnoreCase;
            var newDictionary = new Dictionary<string, int>(myDictionary, comparer);

            foreach (string word in AllWords)
            {
                try
                {
                    if (!newDictionary.ContainsKey(word))
                    {
                        newDictionary.Add(word, 1);

                    }
                    else
                    {
                        newDictionary[word] += 1;
                    }
                }
                catch (Exception ex)
                {
                    throw;
                }
            }
            var first = newDictionary.OrderByDescending(x => x.Value).First();
            return first.Key;

            return "";
        }
        #endregion

        #region Metod för att lägga till foo och bar runt det vanligaste ordet i texten
        public string AddText()
        {
            string topOccurence = TopOccurence();
            string result = ReplaceCaseInsensitive(input, topOccurence, topOccurence);

            return result;
        }
        #endregion

        #region Metod för att enbart byta ordet inte ord som innehåller t.ex The.
        private static string ReplaceCaseInsensitive(string input, string search, string replacement)
        {
            string pattern = @"(" + search + @")\b";

            var result = Regex.Replace(input, pattern, $"foo{replacement}bar", RegexOptions.IgnoreCase);

            return result;
        }
        #endregion
    }
}
