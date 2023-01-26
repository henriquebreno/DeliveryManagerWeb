using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DeliveryManager.Model
{
    [Table("Cardapio")]
    public class Cardapio
    {
        
        [Column("preco")]
        public decimal Preco { get; set; }

        [Column("nome")]
        public string Nome { get; set; }

        [Column("descricao")]
        public string Descricao { get; set; }

        [Column("url")]
        public string Url { get; set; }

        [Key]
        [Column("id_cardapio")]
        public int Id_Cardapio { get; set; }
    }
}
